'use strict';
module.exports = {
  get: () => {
    return Promise.resolve({
      data: [
        {
          id: 0,
          name: 'Watch Movies'
        },
        {
          id: 1,
          name: 'Finish JS Assignment'
        }
      ]
    });
  }
};