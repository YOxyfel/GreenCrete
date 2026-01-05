document.addEventListener('DOMContentLoaded', function ()
{
    const news = [
        {
            id: 1,
            title: 'Нов проект в Ботаническата Градина завършен успешно',
            category: 'projects',
            date: '2024-12-15',
            excerpt: 'GreenCrete завърши инсталацията на пропускливи бетонни павета в главната алея на Ботаническата градина в София.',
            image: '🌳',
            content: 'Проектът обхваща над 5000 квадратни метра и намалява оттичането с 85%. Това е един от най-големите проекти за устойчиво павиране в България.'
        },
        {
            id: 2,
            title: 'Награда за иновации в устойчивото строителство',
            category: 'awards',
            date: '2024-12-10',
            excerpt: 'GreenCrete получи наградата за иновации в устойчивото строителство на годишната конференция на Green Building Council.',
            image: '🏆',
            content: 'Наградата признава нашия принос в разработването на нови екологични бетонни смеси, които намаляват въглеродния отпечатък с до 40%.'
        },
        {
            id: 3,
            title: 'Нова технология Cool-Crete представена',
            category: 'technology',
            date: '2024-12-05',
            excerpt: 'GreenCrete представя новата си технология Cool-Crete, която намалява температурата в градските зони.',
            image: '❄️',
            content: 'Cool-Crete използва специални добавки, които увеличават слънчевото отражение и намаляват топлинните острови в градовете.'
        },
        {
            id: 4,
            title: 'Доклад за устойчивост 2024 публикуван',
            category: 'sustainability',
            date: '2024-11-28',
            excerpt: 'GreenCrete публикува годишния си доклад за устойчивост, показвайки значителни подобрения.',
            image: '📊',
            content: 'Докладът показва намаление на CO2 емисиите с 42% спрямо миналата година и използване на 100% рециклирани материали.'
        },
        {
            id: 5,
            title: 'Партньорство с Технически Университет София',
            category: 'projects',
            date: '2024-11-20',
            excerpt: 'GreenCrete обявява ново партньорство с ТУ София за изследвания в областта на устойчивите материали.',
            image: '🎓',
            content: 'Партньорството ще позволи съвместна работа по разработване на нови технологии и обучение на студенти.'
        },
        {
            id: 6,
            title: 'LEED Platinum сертификация за нов проект',
            category: 'awards',
            date: '2024-11-15',
            excerpt: 'Проектът в Пловдив получи LEED Platinum сертификация, най-високото ниво на екологична сертификация.',
            image: '✅',
            content: 'Това е първият проект в България, който получава LEED Platinum сертификация за използване на устойчиви бетонни материали.'
        },
        {
            id: 7,
            title: 'Инвестиция в нов производствен капацитет',
            category: 'technology',
            date: '2024-11-10',
            excerpt: 'GreenCrete обявява инвестиция от 5 милиона лева в нов производствен капацитет.',
            image: '🏭',
            content: 'Новият капацитет ще увеличи производството с 300% и ще позволи обслужване на повече проекти.'
        },
        {
            id: 8,
            title: 'Участие в международна конференция',
            category: 'sustainability',
            date: '2024-11-05',
            excerpt: 'GreenCrete участва в международната конференция за устойчиво строителство в Берлин.',
            image: '🌍',
            content: 'На конференцията бяха представени нашите най-нови разработки и успешни проекти.'
        }
    ];

    let currentFilter = 'all';
    let currentPage = 1;
    const itemsPerPage = 6;

    function createNewsCard (article)
    {
        const card = document.createElement('div');
        card.className = 'news-card';
        card.dataset.category = article.category;
        
        const date = new Date(article.date);
        const formattedDate = date.toLocaleDateString('bg-BG', { year: 'numeric', month: 'long', day: 'numeric' });
        
        card.innerHTML = `
            <div class="news-card-image">${article.image}</div>
            <div class="news-card-content">
                <span class="news-category">${getCategoryName(article.category)}</span>
                <h3>${article.title}</h3>
                <p class="news-excerpt">${article.excerpt}</p>
                <div class="news-card-footer">
                    <span class="news-date"><i class="fas fa-calendar"></i> ${formattedDate}</span>
                    <button class="read-more-btn" data-id="${article.id}">Прочети повече</button>
                </div>
            </div>
        `;
        
        card.addEventListener('click', function ()
        {
            showNewsModal(article);
        });
        
        return card;
    }

    function getCategoryName (category)
    {
        const names = {
            'projects': 'Проекти',
            'awards': 'Награди',
            'technology': 'Технология',
            'sustainability': 'Устойчивост'
        };
        return names[category] || category;
    }

    function showNewsModal (article)
    {
        const modal = document.createElement('div');
        modal.className = 'news-modal';
        const formattedDate = new Date(article.date).toLocaleDateString('bg-BG', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
        
        modal.innerHTML = `
            <div class="news-modal-content">
                <span class="close-modal">&times;</span>
                <div class="news-modal-header">
                    <div class="news-modal-image">${article.image}</div>
                    <div style="flex: 1;">
                        <span class="news-category" style="display: inline-block; background: rgba(255,255,255,0.2); padding: 6px 16px; border-radius: 20px; margin-bottom: 1rem; font-size: 12px; font-weight: 700;">${getCategoryName(article.category)}</span>
                        <h2>${article.title}</h2>
                        <p style="margin-top: 0.5rem; opacity: 0.9; font-size: 14px;"><i class="fas fa-calendar"></i> ${formattedDate}</p>
                    </div>
                </div>
                <div class="news-modal-body">
                    <p>${article.content}</p>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        modal.style.opacity = '0';
        setTimeout(function ()
        {
            modal.style.transition = 'opacity 0.3s ease';
            modal.style.opacity = '1';
        }, 10);
        
        modal.querySelector('.close-modal').addEventListener('click', function ()
        {
            modal.style.opacity = '0';
            setTimeout(function () { modal.remove(); }, 300);
        });
        
        modal.addEventListener('click', function (e)
        {
            if (e.target === modal)
            {
                modal.style.opacity = '0';
                setTimeout(function () { modal.remove(); }, 300);
            }
        });
    }

    function renderNews ()
    {
        const grid = document.getElementById('newsGrid');
        if (!grid) return;
        
        grid.innerHTML = '';
        
        const filtered = currentFilter === 'all' 
            ? news 
            : news.filter(function (article) { return article.category === currentFilter; });
        
        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const paginated = filtered.slice(start, end);
        
        paginated.forEach(function (article)
        {
            grid.appendChild(createNewsCard(article));
        });
        
        renderPagination(filtered.length);
    }

    function renderPagination (totalItems)
    {
        const pagination = document.getElementById('newsPagination');
        if (!pagination) return;
        
        const totalPages = Math.ceil(totalItems / itemsPerPage);
        pagination.innerHTML = '';
        
        if (totalPages <= 1) return;
        
        for (let i = 1; i <= totalPages; i++)
        {
            const btn = document.createElement('button');
            btn.className = `pagination-btn ${i === currentPage ? 'active' : ''}`;
            btn.textContent = i;
            btn.addEventListener('click', function ()
            {
                currentPage = i;
                renderNews();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
            pagination.appendChild(btn);
        }
    }

    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(function (btn)
    {
        btn.addEventListener('click', function ()
        {
            filterBtns.forEach(function (b) { b.classList.remove('active'); });
            this.classList.add('active');
            currentFilter = this.dataset.filter;
            currentPage = 1;
            renderNews();
        });
    });

    const newsletterSubmit = document.querySelector('.newsletter-submit');
    if (newsletterSubmit)
    {
        newsletterSubmit.addEventListener('click', function (e)
        {
            e.preventDefault();
            const email = document.getElementById('newsletterEmail').value;
            if (email)
            {
                alert('Благодарим за абонамента!');
                document.getElementById('newsletterEmail').value = '';
            }
        });
    }

    renderNews();
});
