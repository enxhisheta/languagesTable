import useFetch from "../hooks/useFetch";
import Filter from "./Filter";

const Table = () => {
  const { data: repositories, loading, error } = useFetch();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  let counter = 0;

  return (
    <div>
      <Filter />
      <table className="language-table">
        <thead>
          <tr>
            <th>Number</th>
            <th>Name</th>
            <th>Language</th>
            <th>Watchers</th>
            <th>Description</th>
            <th>Created At</th>
            <th>Last Updated</th>
            <th>Repository URL</th>
          </tr>
        </thead>
        <tbody>
          {repositories.map((repo) => (
            <tr key={repo.id}>
              <td>{counter++}</td>
              <td>{repo.name}</td>
              <td>{repo.language || "N/A"}</td>
              <td>{repo.watchers_count}</td>
              <td>{repo.description || "No description"}</td>
              <td>{new Date(repo.created_at).toLocaleDateString()}</td>
              <td>{new Date(repo.updated_at).toLocaleDateString()}</td>
              <td>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
