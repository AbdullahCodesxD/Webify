import View from './view.js';

class BtnView extends View {
  _parent = document.querySelector('.buttons');

  // Save function
  saveHandler = function (handler) {
    // Adding click listener to parent
    this._parent?.addEventListener('click', function (e) {
      const target = e.target.closest('.btn-main');
      if (!target) return;
      handler();
    });
  };
  // Save CTRL + S function
  saveEnterHandler = function (handler) {
    document.addEventListener('keydown', function (e) {
      if ((e.key === 's' && e.ctrlKey) || (e.key === 'S' && e.ctrlKey)) {
        e.preventDefault();
        handler();
      }
    });
  };
}
export default new BtnView();
