export default function Byline({author, githubUsername}) {
    const href = `https://github.com/${githubUsername}`;
    return <div>
        <span>by {author}</span>
        {
            githubUsername &&
            <a href={href}>GitHub Profile</a>
        }
    </div>
}
