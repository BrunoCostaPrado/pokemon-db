import { deleteAsync } from "del"
// const del = deleteAsync
const deletedFilePaths = await deleteAsync([
  "meta.json",
  "junit-report.xml",
  "json-report.json",
  "bg.png",
  "favicon.svg",
  "html.meta.json.gz",
])

const deletedDirectoryPaths = await deleteAsync([
  "build",
  "html",
  "coverage",
  "assets",
  "out",
  "type-check",
])

console.log("Deleted files:\n", deletedFilePaths.join("\n"))
console.log("Deleted directories:\n", deletedDirectoryPaths.join("\n"))
