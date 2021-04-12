import { html } from '../../node_modules/lit-html/lit-html.js';
import { createRecord } from '../api/data.js';

const createTemplate = (onSubmit) => html`
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Create New Furniture</h1>
            <p>Please fill all fields.</p>
        </div>
    </div>
    <form @submit=${onSubmit}>
        <div class="row space-top">
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-control-label" for="new-make">Make</label>
                    <input class="form-control valid" id="new-make" type="text" name="make">
                </div>
                <div class="form-group has-success">
                    <label class="form-control-label" for="new-model">Model</label>
                    <input class="form-control" id="new-model" type="text" name="model">
                </div>
                <div class="form-group has-danger">
                    <label class="form-control-label" for="new-year">Year</label>
                    <input class="form-control" id="new-year" type="number" name="year">
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="new-description">Description</label>
                    <input class="form-control" id="new-description" type="text" name="description">
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-control-label" for="new-price">Price</label>
                    <input class="form-control" id="new-price" type="number" name="price">
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="new-image">Image</label>
                    <input class="form-control" id="new-image" type="text" name="img">
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="new-material">Material (optional)</label>
                    <input class="form-control" id="new-material" type="text" name="material">
                </div>
                <input type="submit" class="btn btn-primary" value="Create" />
            </div>
        </div>
    </form>
`;

export async function createPage(ctx) {
    ctx.render(createTemplate(onSubmit));
    
    async function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = [...formData.entries()].reduce((a, [k, v]) => Object.assign(a, { [k]: v }), {});

        if (Object.entries(data).filter(([k, v]) => k != 'material').some(([k, v]) => v == '')) {
            return alert('Some of the required fields are not filled');
        }

        if (formData.get('make').length < 4) {
            return alert('Make field should be at least 4 symbols');
        }

        if (formData.get('model').length < 4) {
            return alert('Model field should be at least 4 symbols');
        }

        if ((Number(formData.get('year')) >= 1950 && Number(formData.get('year')) <= 2050) == false) {
            return alert('Year field should be between 1950 and 2050');
        }

        if (formData.get('description').length < 10) {
            return alert('Description field should be more than 10 symbols');
        }

        if (Number(formData.get('price')) <= 0) {
            return alert('Price field should be positive number');
        }

        if (formData.get('img').trim() == '') {
            return alert('Image URL cannot be empty');
        }

        await createRecord(data);
        ctx.page.redirect('/');
    }
}