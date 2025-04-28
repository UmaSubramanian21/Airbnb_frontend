
export default function UserMenu({ username, email, onSignOut }) {
    return (
        <div className="w-60 rounded-xl shadow-lg bg-white right-0 mx-10 z-50 top-24 fixed">
            <div className="absolute right-0 mt-2 w-56 rounded-xl shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div className="py-2">
                    {/* Displaying username */}
                    <h1 className="font-semibold text-lg px-4 py-2">Hi ,👋 {username}</h1> {/* Here username is displayed */}
                    <MenuItem label="Messages" />
                    <MenuItem label="Notifications" />
                    <MenuItem label="Trips" />
                    <MenuItem label="Wishlists" />
                    <hr className="my-2" />
                    <MenuItem label="Airbnb your home" />
                    <MenuItem label="Host an experience" />
                    <MenuItem label="Refer a host" />
                    <hr className="my-2" />
                    <MenuItem label="Account" />
                    <MenuItem label="Help Centre" />
                    <MenuItem label="Log out" onClick={onSignOut} />
                </div>
            </div>
        </div>
    );
}

function MenuItem({ label, onClick }) {
    return (
        <button
            onClick={onClick}
            className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
            {label}
        </button>
    );
}
