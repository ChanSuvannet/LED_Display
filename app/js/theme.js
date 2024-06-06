document.addEventListener('DOMContentLoaded', () => {
  const imageList = document.querySelector('.imgList ul');

  // Replace these with image URLs you like
  const imageUrls = [
    "https://lh3.googleusercontent.com/drive-viewer/AKGpihaDRBoaIJPvXGhV0XmsMeg5_bbSZWMxPScWfe1nG4ItfGPG8uKq35XTAjGUlPQm96GDEpHMd8vVfR7uTQKZXc-Dsw1los2vpRw=s1600-rw-v1",
    "https://cdnb.artstation.com/p/assets/images/images/000/970/903/large/yeonji-rhee-yeonji-rhee-mood01-2014.jpg?1437279993",
    "https://lh3.googleusercontent.com/drive-viewer/AKGpihZ6-XmRuSoYU2k2A-hAW3CeaLSj39CJSvkEKvIW-b2D329YclsfWvyv8-KqKaXvjqdjxn7X610c_WpRcB3vGMFZhVpnscpX7h8=s1600-rw-v1",
    "https://lh3.googleusercontent.com/drive-viewer/AKGpihbDm21nSYGCwMerO0QZi5G-qoOJVlXWAe_54vZ1KWDpx1XL-zKq2P9lQIYe9Tms1s7VDxHslt4exxQQz46GUujjgzQiNDiWIHM=s1600-rw-v1",
    "https://lh3.googleusercontent.com/drive-viewer/AKGpihZmGh2KmRUP1aRXWYApoxzfr8tbYREYGRn_0nGgp4EVoJyUtB5otYdb00mbomanNI-GFeG5C2sNSexp8ywVwqgA4zpmW1Jbeg=s1600-rw-v1",
  ];

  // Function to handle image click
  function handleClick(imageUrl, image) {
    // Remove 'selected' class from previously selected image
    const prevSelected = document.querySelector('.selectable-image.selected');
    if (prevSelected) {
      prevSelected.classList.remove('selected');
    }

    // Set the clicked image as the background
    document.body.style.backgroundImage = `url(${imageUrl})`;

    // Add 'selected' class to the clicked image
    image.classList.add('selected');
  }

  for (const imageUrl of imageUrls) {
    const imageItem = document.createElement('li');
    const image = document.createElement('img');
    image.src = imageUrl;

    // Add class for styling
    image.classList.add('selectable-image');

    // Click event listener for each image
    image.addEventListener('click', () => {
      handleClick(imageUrl, image);
    });

    // Add default selection to the first image
    if (imageUrl === imageUrls[0]) {
      image.classList.add('selected');
      document.body.style.backgroundImage = `url(${imageUrl})`;
    }

    imageItem.appendChild(image);
    imageList.appendChild(imageItem);
  }
});
