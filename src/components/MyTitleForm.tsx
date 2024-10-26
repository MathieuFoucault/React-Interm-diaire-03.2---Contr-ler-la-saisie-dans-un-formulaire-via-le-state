import { useState } from "react";

const MAX_LENGTH = 40;

function MyTitleForm() {
	const [title, setTitle] = useState("Awesome Title");

	const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.value.length <= MAX_LENGTH) {
			const newTitle = event.target.value.replace(/\*/g, "");
			setTitle(newTitle);
		}
	};

	return (
		<header>
			<h1> {title} </h1>
			<label htmlFor="title">Title :</label>
			<input
				id="title"
				type="text"
				value={title}
				onChange={handleChangeTitle}
			/>
		</header>
	);
}

export default MyTitleForm;
