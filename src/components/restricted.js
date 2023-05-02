import logo from "../public/vertex-logo.png";

const Restricted = () => {
  return (
    <div className="mt-10 md:mx-32">
      <div className="flex justify-center">
        <img src={logo} alt="logo" className="object-contain w-32" />
      </div>
      <div className="flex flex-col mt-44">
        <p className="text-white text-center text-4xl font-bold">Notice</p>
        <div className="mt-8 flex justify-center">
          <p className="text-white text-center whitespace-normal">
          Unfortunately, we are not able to support users from restricted territories at this time. Please refer to the <a href="https://vertexprotocol.com/docs/TermsOfService.pdf" target="_blank" rel="noreferrer" className="underline hover:text-gray-1">Vertex Terms of Service</a> for more information.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Restricted;
