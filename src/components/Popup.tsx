import React from 'react';

export interface PopupProps {
    showModal: boolean,
    handleCloseModal: any,

}

const Popup: React.FC<PopupProps> = ({showModal, handleCloseModal}) => {



    if (!showModal) return null;

    return (
        <div id="container"
             onClick={handleCloseModal}
             className="fixed inset-0 bg-black backdrop-blur-sm bg-opacity-20 flex justify-center items-center transition-all">


            <div className="bg-white p-2 rounded w-72">
                <h1 className="font-semibold text-center text-xl text-gray-700">
                    Welcome back
                </h1>
                <p className="text-center text-gray-700 mb-5">Sign in</p>

                <div className="flex flex-col">
                    <input
                        type="text"
                        className="border border-gray-700 p-2 rounded mb-5"
                        placeholder="email@example.com"
                    />
                    <input
                        type="text"
                        className="border border-gray-700 p-2 rounded mb-5"
                        placeholder="********"
                    />
                </div>
                <div className="text-center">
                    <button className="px-5 py-2 bg-gray-700 text-white rounded">
                        Sign in
                    </button>
                </div>
            </div>


        </div>

    );
};

export default Popup;