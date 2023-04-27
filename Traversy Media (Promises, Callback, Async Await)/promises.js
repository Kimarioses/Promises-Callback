const posts = [
	{title: 'Post One', body: 'This is post one'},
	{title: 'Post Two', body: 'This is post two'}
];
function getPosts()
{
	setTimeout(() =>
	{
		let output = ' ';
		posts.forEach((post, index) =>
		{
			output += `<li>${post.title}</li>`;
		})
		document.body.innerHTML = output;
	}, 1000)
}
function createPost(post)
{
	return new Promise((resolve, reject) =>
	{
		setTimeout(() =>
		{
			posts.push(post);
			const error = false;
			if(error)
				resolve();
			else
				reject('Error: Something went wrong');
		}, 5000)
	})
}
/*
createPost({title: 'Post Three', body: 'This is post three'}).then(getPosts).catch(error => console.log(error));*/
//Promise.all
const promises1 = Promise.resolve("Hello World");
const promises2 = 10;
const promises3 = new Promise(function(resolve, reject)
{
	setTimeout(resolve, 2000, "Goodbye");
})
const promises4 = fetch(("https://jsonplaceholder.typicode.com/users")).then(res => res.json());
Promise.all([promises1, promises2, promises3, promises4]).then(values => console.log(values));