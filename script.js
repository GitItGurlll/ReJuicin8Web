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
        const descriptionElement = document.getElementById('description')
        const totalSections = 10; // Number of sections to divide the container height
        const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

        canvas.width=1158;
        canvas.height=1100;

        
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
            'Revitalize',
            'Recover',
            'Refocus',
            'Revive',
            'Relief',
            'Restart',
            'Regenerate',
            'Rebuild',
            'Rehydrate'
          ];

          const subtexts = [
            "Orange, Pineapple, Lime, Ginger, Carrot, Red Apple",
            'Red Cabbage, Ginger, Black Grapes, Lime, Oranges, Red Apple',
            'Green and Red Apple, Kale, Celery, Pineapple, Lemon, Ginger',
            'Kiwi, Green Grapes, Organe, Spinach, Basil, Red Apple',
            'Carrot, Pineapple, Red Apple, Red Grapes, Ginger, Red Beet, Lime',
            'Lime, Red/Green Apple, Cucumber, Green Grapes',
            'Green Apple, Bosc Pear, Carrot, Lemon',
            'Cucumber, Green Apple, Ginger, Lemon',
            'Cantaloupe, Pear, Strawberry, Lemon, Ginger, Red Apple',
            'Watermelon, Cucumber, Lemon, Pineapple, Ginger, Apple, Mint'
          ];

          const descriptions = [
            "Rejuvenate is a revitalizing blend of fresh and vibrant flavors, carefully crafted to invigorate your senses. This delightful juice concoction combines the zesty tang of oranges, the tropical sweetness of pineapples, the tangy zest of limes, and the subtle warmth of ginger. To add a hint of earthiness, we include the refreshing essence of carrots, balanced with the crispness of red apples. With each sip of Rejuvenate, you'll experience a harmonious fusion of flavors that will leave you feeling refreshed, energized, and ready to take on the day.",
            'A complete elixir, combining the vibrant essence of red cabbage, the invigorating kick of ginger, the rich sweetness of black grapes, the zesty tang of lime, the refreshing burst of oranges, and the crispness of red apple. This revitalizing blend is designed to awaken your senses and replenish your energy, offering a harmonious fusion of flavors that will leave you feeling refreshed and revitalized.',
            'Green and Red Apple, Kale, Celery, Pineapple, Lemon, Ginger',
            'Kiwi, Green Grapes, Organe, Spinach, Basil, Red Apple',
            'Carrot, Pineapple, Red Apple, Red Grapes, Ginger, Red Beet, Lime',
            'Lime, Red/Green Apple, Cucumber, Green Grapes',
            'Green Apple, Bosc Pear, Carrot, Lemon',
            'Cucumber, Green Apple, Ginger, Lemon',
            'Cantaloupe, Pear, Strawberry, Lemon, Ginger, Red Apple',
            'Watermelon, Cucumber, Lemon, Pineapple, Ginger, Apple, Mint'
          ];
          
          let currentSectionIndex = 0;
    let isInCurrentSection = false;
          
    
  
        window.addEventListener('scroll', () => {  
          var myDiv = document.getElementById('scroll-container');
          var scrollPosition = window.scrollY;
          var divOffset = myDiv.offsetTop;
          var divHeight = myDiv.clientHeight;
          
        if (scrollPosition >= divOffset && scrollPosition < divOffset + divHeight) {
            const scrollTop = (html[0].scrollTop - divOffset);
            const maxScrollTop = (scrollTop - window.innerHeight);
            const scrollFraction = (scrollTop / (5 * vh));
            console.log(scrollTop)
            console.log(maxScrollTop)
            const frameIndex = Math.min(
                frameCount - 1,
                Math.floor(scrollFraction * frameCount)
            );
            // console.log('FrameIndex', frameIndex);

            requestAnimationFrame(() => context.drawImage(images[frameIndex + 2], 0, 0));
              console.log(frameIndex)
              console.log(scrollFraction)
              console.log(frameCount)
            const containerHeight = container.offsetHeight;
            const sectionHeight = containerHeight / totalSections;
            const sectionIndex = Math.floor(scrollTop / sectionHeight);


            if (((scrollFraction * 100) % 10) ==  0) {
                currentSectionIndex = ((scrollFraction * 10) / 10)
            }

              if (sectionIndex !== currentSectionIndex) {
                textElement.style.opacity = '0';
                descriptionElement.style.opacity = '0';
                subtextElement.style.opacity = '0';
                setTimeout(() => {
                  textElement.textContent = texts[currentSectionIndex];
                  subtextElement.textContent = subtexts[currentSectionIndex];
                  descriptionElement.textContent = descriptions[currentSectionIndex];
                  textElement.style.opacity = '1';
                  subtextElement.style.opacity = '1';
                  descriptionElement.style.opacity = '1';
                
                }, 400); // Change the duration (in milliseconds) to control the fade in time
                currentSectionIndex = sectionIndex;
              }
            }
        });


