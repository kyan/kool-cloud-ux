export default function changeLocation(location) {
  return (e) => {
    e.preventDefault();
    window.location = location;
  }
}
