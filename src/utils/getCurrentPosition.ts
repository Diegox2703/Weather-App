export const getCurrentPosition = () => {
    navigator.geolocation.getCurrentPosition(
        (position) => console.log(position.coords),
        (error) => console.log(error)
    )
}