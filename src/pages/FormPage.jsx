function FormPage() {
  return (
    <div className="overflow-auto h-screen pb-24 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0 mt-6 lg:mt-0">
      <div className="flex flex-col  flex-wrap sm:flex-row ">
        <div className="container mx-auto px-4 sm:px-8 max-w-8xl">
          <div className="py-8">
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow sm:max-w-md sm:w-full sm:mx-auto sm:overflow-hidden">
              <div className="px-4 py-8 sm:px-10">
                <div className="relative mt-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm leading-5">
                    <span className="px-2 text-gray-500 dark:text-white bg-white dark:bg-slate-700">
                      فرم ثبت کاربر
                    </span>
                  </div>
                </div>
                <div className="mt-6">
                  <div className="w-full space-y-10">
                    <div className="w-full">
                      <div className="relative">
                        <label htmlFor="email" className="text-gray-700 dark:text-slate-50">
                          ایمیل
                          <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="search-form-price"
                          className="ring-2 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white dark:bg-slate-700 text-gray-700 dark:text-slate-50 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:invalid:invalid:ring-red-500 invalid:invalid:ring-red-500 focus:border-transparent peer"
                          placeholder="ایمیل شما"
                        />
                        <p className="hidden peer-invalid:block peer-invalid:text-red-500 absolute text-sm -bottom-6">
                          ایمیل نامعتبر
                        </p>
                      </div>
                    </div>
                    <div className="w-full">
                      <div className=" relative ">
                        <label htmlFor="name" className="text-gray-700 dark:text-slate-50">
                          نام
                        </label>
                        <input
                          type="text"
                          id="name"
                          className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white dark:bg-slate-700 text-gray-700 dark:text-slate-50 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                          placeholder="نام"
                        />
                      </div>
                    </div>
                    <div className="w-full">
                      <div className="relative">
                        <label htmlFor="lastname" className="text-gray-700 dark:text-slate-50">
                          فامیلی
                        </label>
                        <input
                          type="text"
                          id="lastname"
                          className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white dark:bg-slate-700 text-gray-700 dark:text-slate-50 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                          placeholder="نام خانوادگی"
                        />
                      </div>
                    </div>
                    <div>
                      <span className="block w-full rounded-md shadow-sm">
                        <button
                          type="button"
                          className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                        >
                          ثبت
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormPage;
