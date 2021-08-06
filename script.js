// const category_blocks_array = [
//   {
//     title: 'Hatha Yoga',
//     instructor: 'Harshvardhan Jhaveri',
//     alumnus: 'Kaivalyadhama Yoga Institute',
//     description: 'A traditional practice of daily asanas (postures) and pranayama (breathing) techniques that open the body and focus the mind. Our curriculum is designed around slow progression, in order to master the basics and better understand your body. This aids in deeper meditative practices',
//     background: 'rgba(221, 85, 64, 0.8)'
//   },
//   {
//     title: 'Meditation',
//     instructor: 'Sandeep Verma',
//     alumnus: 'Kaivalyadhama Yoga Institute',
//     description: 'A traditional practice of daily asanas (postures) and pranayama (breathing) techniques that open the body and focus the mind. Our curriculum is designed around slow progression, in order to master the basics and better understand your body. This aids in deeper meditative practices',
//     background: 'rgba(49, 67, 223, 0.8)'
//   }
// ];


// function setCategoryBlock (){
//   for(let i = 0; i < category_blocks_array.length; i++) {
//     const category_block = document.querySelector('category_block');
//     const block = category_blocks_array[i];
//     category_block.innerHTML = `
//       <div class="category_block_title">${block.title}</div>
//       <div class="category_block_content">
//         <div class="category_block_content_instructor mb-4">
//           <p class="fw_300 mb-0">Led by 
//             <span class="fw_500">${block.instructor}</span>,
//           </p>
//           <p class="fw_300 mb-0">Alumni of 
//             <span class="fw_500">${block.alumnus}</span>
//           </p>
//         </div>
//         <div class="category_block_content_description">
//           <p class="fw_400 mb-0">${block.description}</p>
//         </div>
//       </div>
//     `
//   }
// }

// setCategoryBlock();