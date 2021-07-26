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
