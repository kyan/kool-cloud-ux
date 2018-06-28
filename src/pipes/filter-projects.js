import _ from "lodash";
import map from '../store/map'

export default function filterProjects() {
  const re = new RegExp(_.escapeRegExp(map.searchFilter), 'i');
  const isMatch = result => re.test(result.title)
  return _.filter(map.projects, isMatch);
}
