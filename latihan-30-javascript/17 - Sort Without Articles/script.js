const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled',
      'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive',
      'Anywhere But Here', 'An Old Dog'
    ];

    function strip(bandName) {
      //  /^(a |the |an |)/i pengganti dari new RegExp
      return bandName.replace(new RegExp("a |an |the ", "i"), ``).trim();
    }

    const sortedBands = bands.sort((a, b) => (strip(a) > strip(b)) ? 1 : -1);

    const ulBands = document.querySelector(`#bands`)
    ulBands.innerHTML = sortedBands.map(sortedBand => {
      return /*html*/ `
      <li>${sortedBand}</li>
      `
    }).join(``);
    console.log(sortedBands);