    const BannerText1 = document.querySelector('.container-banner .bannerText:nth-child(1)');
    const BannerText2 = document.querySelector('.container-banner .bannerText:nth-child(2)');
    const BannerText3 = document.querySelector('.container-banner .bannerText:nth-child(3)');

    for (let i = 2; i <= 3; i++) {
        const currentBannerText = document.querySelector(`.container-banner .bannerText:nth-child(${i})`);
        currentBannerText.style.display = "none";
    }
    let tipPosition = 0;
    
    document.querySelector(`.container-banner`).addEventListener('click', ()=>{
        tipPosition+=1;
        BannerText1.style.display = "none";
        switch(tipPosition){
            case 0:
                BannerText1.style.display = "flex";
                BannerText2.style.display = "none";
                BannerText3.style.display = "none";
                break;   
                case 1:
                    BannerText2.style.display = "flex";
                    BannerText1.style.display = "none";
                BannerText3.style.display = "none";
                break;   
                case 2:
                    BannerText3.style.display = "flex";
                    BannerText1.style.display = "none";
                    BannerText2.style.display = "none";
                    break;   
                case 3:
                    tipPosition = 0;
                    BannerText1.style.display = "flex";
                    BannerText2.style.display = "none";
                    BannerText3.style.display = "none";
                    break;   
                    
                }
                
            });
