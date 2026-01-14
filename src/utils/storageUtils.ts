export function saveFcmTokenIntoLocalStorage() {
    const searchParams = new URLSearchParams(window.location.search);

    const fcmToken = searchParams.get('fcmToken');

    if (fcmToken) {
        localStorage.setItem('fcmToken', fcmToken);
    }
}
