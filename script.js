(window).scroll(function() {
    var scrollTop = $(this).scrollTop();
    ('.parallax-container').css('background-position', 'center ' + scrollTop / 2 + 'px');
  });

          // Canvas settings
        const canvas = document.getElementById("hero-lightpass");
        const context = canvas.getContext("2d");
        const container = document.getElementById('scroll-container');
        const textElement = document.getElementById('text-element');
        const subtextElement = document.getElementById('subtext-element')
        const totalSections = 10; // Number of sections to divide the container height

        canvas.width=1158;
        canvas.height=1000;

        
        // Preloading images to drastically improve performance
        const currentFrame = index => (`Drink/Green${index.toString()}.jpg`);
        console.log(currentFrame)
        const frameCount = 148; // There 148 images for that animation-sequence to load
        const images = [];

        const preloadImages = () => {
            for (let i = 1; i < frameCount; i++) {
                images[i] = new Image(); // This is functionally equivalent to document.createElement('img').
                images[i].src = currentFrame(i);
            }
        };

        preloadImages();


        // Draw the first image
        const img = new Image();
        img.src = currentFrame(1);
        img.onload = function(){
            context.drawImage(img, 0, 0);
        }


        // Scroll interactions
        const html = document.getElementsByTagName('html');
        
        const texts = [
            "Rejuvenate",
            'New Text 2',
            'New Text 3',
            'New Text 4',
            'New Text 5',
            'New Text 6',
            'New Text 7',
            'New Text 8',
            'New Text 9',
            'New Text 10'
          ];

          const subtexts = [
            "Orange, Pineapple, Lime, Ginger, Carrot, Red Apple",
            'New Text 2',
            'New Text 3',
            'New Text 4',
            'New Text 5',
            'New Text 6',
            'New Text 7',
            'New Text 8',
            'New Text 9',
            'New Text 10'
          ];
          
          let currentSectionIndex = 0;
    let isInCurrentSection = false;
          
        
        window.addEventListener('scroll', () => {  
            const scrollTop = html[0].scrollTop;
            // console.log('scrollTop: ', scrollTop);
            // console.log('html.scrollHeight: ', html[0].scrollHeight);
            // console.log('window.innerHeight: ', window.innerHeight);
            const maxScrollTop = html[0].scrollHeight - window.innerHeight;
            const scrollFraction = scrollTop / maxScrollTop;
            const frameIndex = Math.min(
                frameCount - 1,
                Math.floor(scrollFraction * frameCount)
            );
            // console.log('FrameIndex', frameIndex);

            requestAnimationFrame(() => context.drawImage(images[frameIndex + 2], 0, 0));

            const containerHeight = container.offsetHeight;
            const sectionHeight = containerHeight / totalSections;
            const sectionIndex = Math.floor(scrollTop / sectionHeight);


            if (((scrollFraction * 100) % 10) ==  0) {
                currentSectionIndex = ((scrollFraction * 10) / 10)
            }

              if (sectionIndex !== currentSectionIndex) {
                textElement.style.opacity = '0';
                subtextElement.style.opacity = '0';
                setTimeout(() => {
                  textElement.textContent = texts[currentSectionIndex];
                  subtextElement.textContent = subtexts[currentSectionIndex];
                  textElement.style.opacity = '1';
                  subtextElement.style.opacity = '1';
                
                }, 400); // Change the duration (in milliseconds) to control the fade in time
                currentSectionIndex = sectionIndex;
              }
        });



