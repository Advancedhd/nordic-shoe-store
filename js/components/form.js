export function getAdminForm() {
  const form = `
  <h1 class="pagetitle">Admin Panel</h1>
<div class="container adminforms-container">
    <form id="sendAdd">
            <h1 class="addProductFormTitle" access="false" id="control-4254376">Add Product</h1>
        <div class="form-group">
            <label for="addTitleInput" class="">Title<span class="required">*</span></label>
            <input type="text" class="form-control" name="addTitleInput" access="false" id="addTitleInputValue" required="required" aria-required="true">
        </div>
        <div class="form-group">
            <label for="addPriceInput" class="">Price<span class="required">*</span></label>
            <input type="text" placeholder="0.00" class="form-control" name="addPriceInput" access="false" id="addPriceInputValue" required="required" aria-required="true">
        </div>
        <div class="form-check">
            <input class="form-check-input" name="addfProductCheck" access="false" id="addfProductCheckValue" value="addfProductCheck" type="checkbox" checked="checked">
            <label for="addfProductCheck" class="form-check-label">Is featured?</label>
        </div>
        <div class="form-group">
            <label for="addDescInput" class="">Description<span class="required">*</span></label>
            <input type="text" class="form-control" name="addDescInput" access="false" id="addDescInputValue" required="required" aria-required="true">
        </div>
        <div class="form-group">
            <label for="addImgUrlInput" class="">Image URL<span class="required">*</span></label>
            <input type="text" placeholder="https://example.com/cute-cat.png" class="form-control" name="addImgUrlInput" access="false" id="addImgUrlInputValue" required="required" aria-required="true">
        </div>
        <button type="button" class="btn-primary btn" name="submit" access="false" style="primary" id="addButton">Add</button>
    </form>
    <div class="add-errors"></div>

    <form id="sendEdit">
            <h1 class="updateProductFormTitle" access="false">Update Product</h1>
        <div class="form-group">
            <label for="updateIdInput" class="text-label">ID<span class="required">*</span></label>
            <input type="text" class="form-control" name="updateIdInput" access="false" id="updateIdInputValue" required="required" aria-required="true">
        </div>
        <div class="form-group">
            <label for="updateTitleInput" class="text-label">Title</label>
            <input type="text" class="form-control" name="updateTitleInput" access="false" id="updateTitleInputValue">
        </div>
        <div class="form-group">
            <label for="updatePriceInput" class="text-label">Price</label>
            <input type="text" placeholder="0.00" class="form-control" name="updatePriceInput" access="false" id="updatePriceInputValue">
        </div>
        <div class="form-check">
            <input class="form-check-input" name="updatefProductCheck" access="false" id="updatefProductCheckValue" type="checkbox">
            <label for="updatefProductCheck" class="form-check-label">Is featured?</label>
        </div>
        <div class="form-group">
            <label for="updateDescInput" class="text-label">Description</label>
            <input type="text" class="form-control" name="updateDescInput" access="false" id="updateDescInputValue">
        </div>
        <div class="form-group">
            <label for="updateImgUrlInput" class="text-label">Image URL</label>
            <input type="text" placeholder="https://example.com/cool-shoes.png" class="form-control" name="updateImgUrlInput" access="false" id="updateImgUrlInputValue">
        </div>
        <button type="button" class="btn-primary btn" name="submit" access="false" style="primary" id="updateButton">Update</button>
    </form>
    <div class="update-errors"></div>

    <form id="sendDelete">
        <h1 class="deleteProductFormTitle" access="false">Delete Product</h1>
        <div class="form-group">
            <label for="deleteIdInput" class="text-label">ID<span class="required">*</span></label>
            <input type="text" class="form-control" name="deleteIdInput" access="false" id="deleteIdInputValue" required="required" aria-required="true">
        </div>
        <button type="button" class="btn-primary btn" name="submit" access="false" style="primary" id="deleteButton">Delete</button>
        <div class="delete-errors"></div>
    </form>
    <div id="curProductList"><h1>Current Products</h1></div>
</div>
`;
  return form;
}




