export default function changeLocation(location) {
  return (e) => {
    window.location = location;
    e.preventDefault();
  }
}
