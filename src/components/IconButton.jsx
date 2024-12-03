import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function IconLink({ icon }) {
  return (
    <>
      <a className="flex items-center justify-center w-8 h-8 border-2 border-green rounded-full text-green hover:bg-green hover:text-primary cursor-pointer">
        <FontAwesomeIcon icon={icon} />
      </a>
    </>
  );
}


