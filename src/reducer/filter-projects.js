import _ from "lodash";
export default function filterProjects(searchFilter, data) {
  const re = new RegExp(_.escapeRegExp(searchFilter), 'i');
  const isMatch = result => re.test(result.title)
  return _.filter(data, isMatch);
}
