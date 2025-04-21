utils.jq(() => {
    const els = Array.from(document.getElementsByClassName('ds-memos'));

    els.forEach(el => {
        const api = el.getAttribute('api');
        if (!api) return;

        const default_avatar = el.getAttribute('avatar') || '';
        const limit = el.getAttribute('limit');
        const host = api.match(/https:\/\/(.*?)\/(.*)/i)[1];

        utils.request(el, api, async data => {
            const memos = {
                users: [],
                site: api.split('/api/v1')[0],
                data: data.memos || []
            };

            const users = el.getAttribute('user')?.split(",") || [];
            const hide = el.getAttribute('hide')?.split(",") || [];

            await Promise.all(memos.data.slice(0, limit || memos.data.length).map(item =>
                createMemoCell(item, memos, users, hide, default_avatar).then(cell => $(el).append(cell))
            ));
        });

        async function createMemoCell(item, memos, users, hide, default_avatar) {
            const userHtml = await buildUser(item, memos, default_avatar);
            const dateHtml = buildDate(item).toLocaleString();
            const contentHtml = marked.parse(item.content || '');
            const imagesHtml = buildImages(item).join('');

            return `
        <div class="timenode">
          <div class="header">
            ${!users.length && !hide.includes('user') ? userHtml : ''}
            <span>${dateHtml}</span>
          </div>
          <div class="body">
            ${contentHtml}
            <div class="tag-plugin image">${imagesHtml}</div>
          </div>
        </div>
      `;
        }

        // 构建用户信息
        async function buildUser(item, memos, default_avatar) {
            const creatorId = item?.creator.split('/')[1];
            let user = memos.users.find(user => user.id === parseInt(creatorId));
            if (!user) {
                user = await fetch(`${memos.site}/api/v1/users/${creatorId}`)
                    .then(response => response.json())
                    .catch(() => null);

                if (user) {
                    memos.users.push(user);
                }
            }
            const name = user ? user.nickname || user.username : 'memos';
            const avatarUrl = user?.avatarUrl ? `${memos.site}${user.avatarUrl}` : default_avatar;
            return `
        <div class="user-info">
          ${avatarUrl ? `<img src="${avatarUrl}">` : ''}
          <span>${name}</span>
        </div>
      `;
        }

        // 构建日期
        function buildDate(item) {
            return new Date(item.createTime);
        }

        // 构建图像资源
        function buildImages(item) {
            return (item.resources || [])
                .filter(res => res.type?.includes('image/')) // 筛选图像资源
                .map(res => {
                    const resourceId = res.name.split('/')[1]; // 提取资源ID
                    const fileName = res.filename;            // 提取文件名
                    const imageUrl = `https://memos.sakurasep.site/file/resources/${resourceId}/${fileName}`;
                    return `
                <div class="image-bg">
                    <a href="${imageUrl}" data-fancybox="gallery">
                        <img src="${imageUrl}" alt="image">
                    </a>
                </div>`;
                });
        }

    });
});
