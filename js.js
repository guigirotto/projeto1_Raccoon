        const nav_mobile = () => {
            const burguer = document.querySelector('.nav__hmb');
            const nav = document.querySelector('.nav__links ');

            burguer.addEventListener('click', () => {
                nav.classList.toggle('nav-active');
            });
        }

        nav_mobile();