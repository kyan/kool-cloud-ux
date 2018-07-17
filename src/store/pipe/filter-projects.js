import _ from "lodash";
import { state } from '../store'

export default function filterProjects() {
  const re = new RegExp(_.escapeRegExp(state().searchFilter), 'i');
  const isMatch = result => re.test(result.title)
  return _.filter(state().projects, isMatch);
}
