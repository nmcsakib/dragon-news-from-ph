/* eslint-disable react/prop-types */

import {useState} from "react";

// react icons
import {IoMdCloudUpload} from "react-icons/io";
import {MdDelete} from "react-icons/md";

const PhotoInput = ({setProfile}) => {
    const [imageURL, setImageURL] = useState("");

    const handleImageUpload = () => {
        document.getElementById("image_input").click();
    };

    const handleFileChange = (e) => {
        e.preventDefault();
        const file = e.target.files[0];
        if (file) {
            const imageURL = URL.createObjectURL(file);
            setImageURL(imageURL);
            setProfile(file)
        }
    };

    return (
        <div className="mb-4 ">
                <label
                htmlFor="image"
                className="text-[15px] dark:text-[#abc2d3] text-[#424242] font-[400]"
            >
                Profile
            </label>
            <input
                type="file"
                name="image"
                id="image_input"
                className="hidden"
                accept="image/*"
                
                onChange={handleFileChange}
            />
            {imageURL === "" ? (
                <div
                    className="w-full flex dark:border-slate-700 dark:bg-slate-300 items-center justify-center flex-col bg-white border border-dashed border-[#3B9DF8] rounded-md py-6 ">
                    <IoMdCloudUpload className="text-[3rem] "/>
                    <p className="mt-2 text-text dark:text-[#1e6ca8]">Drag and drop Profile Pic</p>
                    <p className=" text-text dark:text-[#19649e]">or</p>

                    <button type="button"
                        className="px-6 py-1.5 text-[#082541]"
                        onClick={handleImageUpload}
                    >
                        Browse
                    </button>
                </div>
            ) : (
                <div className="relative w-full md:w-[80%] h-[200px]">
                    <img
                        src={imageURL}
                        alt="image"
                        className="w-full h-full object-cover"
                    />
                    <MdDelete
                        className="text-[2rem] text-white bg-[#000000ad] p-1 absolute top-0 right-0 cursor-pointer"
                        onClick={() => setImageURL("")}
                    />
                </div>
            )}
        </div>
    );
};

export default PhotoInput;
                