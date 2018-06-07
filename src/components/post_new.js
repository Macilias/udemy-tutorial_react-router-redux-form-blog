import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostNew extends Component {

	renderField(field) {

		const { meta: {touched, error} } = field;
		const className = `form-group ${touched && error ? 'has-danger' : ''}`;

		return (
			<div className={className}>
				<label>{field.label}</label>
				<input
					className="form-control"
					type="text"
					{...field.input}
				/>
				{/*text-help works along with has-danger for provide red alert*/}
				<div className="text-help">
					{/*this prevents from validating untouched fields*/}
					{touched ? error : ''}
				</div>
			</div>
		);
	}

	onSubmit(values) {
		console.log(values);
	}

	render() {
		const { handleSubmit } = this.props;

		return (
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
				<Field
					label="Title"
					// name property must be identical with errors. to map those
					name="title"
					component={this.renderField}
				/>
				<Field
					label="Categories"
					name="categories"
					component={this.renderField}
				/>
				<Field
					label="Post Content"
					name="content"
					component={this.renderField}
				/>
				<button type="submit" className="btn btn-primary">Submit</button>
			</form>
		);
	}
}

function validate(values) {
	const errors = {};

	if (!values.title) {
		errors.title = "Enter a title!";
	}
	if (!values.categories) {
		errors.categories = "Enter some categories";
	}
	if (!values.content) {
		errors.content = 'Enter some content please';
	}

	// if errors is empty, the form is fine to submit
	// if errors has *any* properties, redux form assumes form is invalid
	return errors;
}

export default reduxForm({
	validate,
	form: 'PostNewForm',
})(PostNew);
