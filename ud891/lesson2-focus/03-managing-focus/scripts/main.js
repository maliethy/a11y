page("/", function () {
  page.redirect("/what-is-vegemite");
});

page("/:slug", function (context) {
  // console.log('context',context)
  // This will match any value after the first / in the url. For example, if
  // the url was /foo, the value of slug would be "foo".
  var slug = context.params.slug;

  // Remove is-active class from previous menu item and section
  var oldMenuItem = document.querySelector("#menu .is-active");
  var oldPage = document.querySelector("main .is-active");
  oldMenuItem.classList.remove("is-active");
  oldPage.classList.remove("is-active");

  // Add is-active class to new menu item and section using the URL slug
  var newMenuItem = document.querySelector("#menu [data-page=" + slug + "]");
  var newPage = document.querySelector("main [data-page=" + slug + "]");

  //If the focus in h2 and click tab, you can move to main content anchor tag
  //and if you want to go to header again you have to click tab + shift
  newMenuItem.classList.add("is-active");
  newPage.classList.add("is-active");
  newPage.querySelector("h2").focus();

  //https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes
  //console.log("newPage.dataset", newPage.dataset);
  //DOMStringMap {page: 'what-is-vegemite'}
});

page({
  hashbang: true,
});
