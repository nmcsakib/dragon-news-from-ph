
// eslint-disable-next-line react/prop-types
const AnimatedBtn = ({label}) => {
    return (
      <button
            className="w-full relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-gray-400 rounded-md group">
                  <span
                      className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-gray-600 rounded-md group-hover:mt-0 group-hover:ml-0"></span>
            <span className="absolute inset-0 w-full h-full dark:bg-slate-400 bg-white rounded-md "></span>
            <span
                className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 rounded-md opacity-0 group-hover:opacity-100 "></span>
            <span
                className="relative text-black transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">{label}</span>
        </button>
    );
};

export default AnimatedBtn;