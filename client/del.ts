import { deleteAsync } from "del"
// const del = deleteAsync
const deletedFilePaths = await deleteAsync(["stats.html"])

const deletedDirectoryPaths = await deleteAsync(["build", ".svelte-kit"])

console.log("Deleted files:\n", deletedFilePaths.join("\n"))
console.log("Deleted directories:\n", deletedDirectoryPaths.join("\n"))
