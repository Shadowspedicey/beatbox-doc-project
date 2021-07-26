/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
// eslint-disable-next-line no-unused-vars
const DropDown = (() =>
{
	const _dropDownDOM = document.querySelector("#dropdown");
	const _dropDownMenuDOM = document.querySelector("#dropdown-menu");

	(() =>
	{
		_dropDownDOM.addEventListener("click", () =>
		{
			_dropDownMenuDOM.classList.toggle("hidden");
			window.setTimeout(() => _dropDownMenuDOM.classList.toggle("down"), 50);
		});
	})();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iZWF0Ym94LWRvYy1wcm9qZWN0Ly4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRUFBRTtBQUNGLENBQUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuY29uc3QgRHJvcERvd24gPSAoKCkgPT5cbntcblx0Y29uc3QgX2Ryb3BEb3duRE9NID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkcm9wZG93blwiKTtcblx0Y29uc3QgX2Ryb3BEb3duTWVudURPTSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZHJvcGRvd24tbWVudVwiKTtcblxuXHQoKCkgPT5cblx0e1xuXHRcdF9kcm9wRG93bkRPTS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT5cblx0XHR7XG5cdFx0XHRfZHJvcERvd25NZW51RE9NLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG5cdFx0XHR3aW5kb3cuc2V0VGltZW91dCgoKSA9PiBfZHJvcERvd25NZW51RE9NLmNsYXNzTGlzdC50b2dnbGUoXCJkb3duXCIpLCA1MCk7XG5cdFx0fSk7XG5cdH0pKCk7XG59KSgpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==