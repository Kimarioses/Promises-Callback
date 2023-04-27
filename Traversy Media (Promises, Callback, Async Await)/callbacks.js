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
function createPost(post, callback)
{
	setTimeout(() =>
	{
		//Khắc phục không hiển thị Post Three
		callback();
		posts.push(post);
	}, 2000)
}
createPost({title: 'Post Three', body: 'This is post three'}, getPosts);
//Ví dụ trên đây cho thấy nếu createPost() chạy nhanh hơn getPosts() thì kết quả sẽ được như mong đợi là cả 3 Post One
//Post Two, Post Three. Tuy nhiên, createPost() lại chạy chậm hơn so với getPosts() nên sau khi chạy getPosts() cấu trúc DOM
//đã xây dựng xong vì vậy createPost() không được thực hiện, để khắc phục điều này, chúng ta dùng callback