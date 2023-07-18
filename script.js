(window).scroll(function() {
    var scrollTop = $(this).scrollTop();
    ('.parallax-container').css('background-position', 'center ' + scrollTop / 2 + 'px');
  });

          // Canvas settings
        const canvas = document.getElementById("hero-lightpass");
        const context = canvas.getContext("2d");
        const textElement = document.getElementById('text-element');
        const subtextElement = document.getElementById('subtext-element');
        const descriptionElement = document.getElementById('description');
        const buttonElement = document.getElementById('Order');
        const totalSections = 10; // Number of sections to divide the container height
        const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

        canvas.width=1158;
        canvas.height=1100;

        
        // Preloading images to drastically improve performance
        const currentFrame = index => (`Drink/Green${index.toString()}.jpg`);
        const frameCount = 180; // There 162 images for that animation-sequence to load
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
        img.src = currentFrame(0);
        img.onload = function(){
            context.drawImage(img, 0, 0);
        }


        // Scroll interactions
        const html = document.getElementsByTagName('html');
        const texts = [
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
            'A complete elixir, combining the vibrant essence of red cabbage, the invigorating kick of ginger, the rich sweetness of black grapes, the zesty tang of lime, the refreshing burst of oranges, and the crispness of red apple. This revitalizing blend is designed to awaken your senses and replenish your energy, offering a harmonious fusion of flavors that will leave you feeling refreshed and revitalized.',
            'At the juice bar, the "Recover" drink is a revitalizing blend of Green and Red Apple, Kale, Celery, Pineapple, Lemon, and Ginger. This vibrant concoction combines the crisp sweetness of apples with the earthy essence of kale and the refreshing tang of pineapple. The addition of celery adds a subtle hint of freshness, while lemon provides a zesty kick. Finally, the invigorating touch of ginger adds a spicy note to complete this rejuvenating beverage. Sip on the "Recover" and feel your energy replenished as you indulge in the harmonious fusion of flavors and the nourishing benefits of these wholesome ingredients.',
            'A revitalizing and nutrient-packed drink, this vibrant concoction combines the refreshing flavors and health benefits of kiwi, green grapes, orange, spinach, basil, and red apple. The tartness of kiwi and green grapes perfectly complements the citrusy sweetness of orange and red apple, creating a harmonious blend. The addition of spinach and basil adds a dose of green goodness, providing essential vitamins and minerals. This invigorating drink not only tantalizes your taste buds but also replenishes your body with essential nutrients, helping you refocus and recharge.',
            'Crafted to invigorate your senses and boost your energy levels, this vibrant concoction combines the goodness of carrot, pineapple, red apple, red grapes, ginger, red beet, and lime. The carrot adds a touch of natural sweetness and a wealth of vitamins and antioxidants, while the pineapple and red apple contribute to the refreshing tropical flavor. The red grapes provide a burst of juicy goodness, and the ginger adds a subtle spicy kick. The red beet brings its earthy richness and vibrant color, while the lime adds a zesty twist. It brings you back to life!',
            'Lime, Red/Green Apple, Cucumber, Green Grapes',
            'Green Apple, Bosc Pear, Carrot, Lemon',
            'Cucumber, Green Apple, Ginger, Lemon',
            'Cantaloupe, Pear, Strawberry, Lemon, Ginger, Red Apple',
            'Watermelon, Cucumber, Lemon, Pineapple, Ginger, Apple, Mint'
          ];
          
          let currentSectionIndex = 0;
    let isInCurrentSection = false;
          
    
  
        window.addEventListener('scroll', () => {  
          function fadeOut() {
            textElement.style.opacity = '0';
              descriptionElement.style.opacity = '0';
              subtextElement.style.opacity = '0';
              buttonElement.style.opacity = '0';
          } 

          function fadeIn () {
            textElement.style.opacity = '1';
                subtextElement.style.opacity = '1';
                descriptionElement.style.opacity = '1';
                buttonElement.style.opacity = '1';
          }
          var myDiv = document.getElementById('scroll-container');
          var scrollPosition = window.scrollY;
          var divOffset = (myDiv.offsetTop);
          var divHeight = (2.5 * vh);
          
        if (scrollPosition >= divOffset && scrollPosition < divOffset + divHeight) {
            const scrollTop = (html[0].scrollTop - divOffset);
            const maxScrollTop = (scrollTop - window.innerHeight);
            const scrollFraction = ((scrollTop / divHeight));
            const frameIndex = Math.min(
                frameCount - 1,
                Math.floor(scrollFraction * frameCount)
            );
            // console.log('FrameIndex', frameIndex);

            requestAnimationFrame(() => context.drawImage(images[frameIndex], 0, 0));
            console.log(divOffset)
              
              console.log(scrollTop)
              console.log(divOffset)
              console.log(divHeight)
              console.log(maxScrollTop + "hj")
            const sectionHeight = divHeight / totalSections;
            const sectionIndex = (Math.floor(scrollTop / sectionHeight) - 1);
            console.log((scrollTop / sectionHeight) - (scrollFraction * 10))
            console.log(divOffset + "  " + divHeight + "   " + scrollFraction)


            if (((scrollFraction * 100) % 10) ===  0) {
              console.log("oh?")
                currentSectionIndex = (((scrollFraction * 10) / 10))
            }

            if (((scrollFraction * 10) >= 9) && sectionIndex == 8) {
              setTimeout(() => {
                fadeOut()
                canvas.style.opacity = '0';
            }, 200);
          }

          if (((scrollFraction * 10) <= 8.5) && sectionIndex == 8) {
            setTimeout(() => {
              fadeIn()
              canvas.style.opacity = '1';
          }, 200);
        }

        console.log(scrollFraction + "hi")


              if (currentSectionIndex !== sectionIndex) {
                fadeOut();
                setTimeout(() => {
                  textElement.textContent = texts[currentSectionIndex];
                  subtextElement.textContent = subtexts[currentSectionIndex];
                  descriptionElement.textContent = descriptions[currentSectionIndex];
                  fadeIn();
                  console.log(sectionIndex)
                }, 200); // Change the duration (in milliseconds) to control the fade in time
                currentSectionIndex = sectionIndex;
              }
            }
        });


