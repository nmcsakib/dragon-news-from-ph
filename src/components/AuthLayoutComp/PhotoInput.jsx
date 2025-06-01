
import {useState} from "react";

// react icons
import {IoMdCloudUpload} from "react-icons/io";
import {MdDelete} from "react-icons/md";

const PhotoInput = () => {
    const [image, setImage] = useState("");

    const handleImageUpload = () => {
        document.getElementById("image_input").click();
    };

    const handleFileChange = (e) => {
        e.preventDefault();
        const file = event.target.files[0];
        if (file) {
            const imageURL = URL.createObjectURL(file);
            setImage(imageURL);
        }
    };

    return (
        <div className="mb-4 flex items-center flex-col gap-5 justify-center">
            <input
                type="file"
                name="image"
                id="image_input"
                className="hidden"
                onChange={handleFileChange}
            />
            {image === "" ? (
                <div
                    className="w-full flex dark:border-slate-700 dark:bg-slate-300 items-center justify-center flex-col bg-white border border-dashed border-[#3B9DF8] rounded-md py-6 ">
                    <IoMdCloudUpload className="text-[3rem] "/>
                    <p className="mt-2 text-text dark:text-[#1e6ca8]">Drag and drop Profile Pic</p>
                    <p className=" text-text dark:text-[#19649e]">or</p>

                    <button
                        className="px-6 py-1.5 text-[#082541]"
                        onClick={handleImageUpload}
                    >
                        Browse
                    </button>
                </div>
            ) : (
                <div className="relative w-full md:w-[80%] h-[200px]">
                    <img
                        src={image}
                        alt="image"
                        className="w-full h-full object-cover"
                    />
                    <MdDelete
                        className="text-[2rem] text-white bg-[#000000ad] p-1 absolute top-0 right-0 cursor-pointer"
                        onClick={() => setImage("")}
                    />
                </div>
            )}
        </div>
    );
};

export default PhotoInput;
                