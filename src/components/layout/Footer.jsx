export default function Footer() {
  return (
    <footer className="py-8 px-6 bg-linear-to-br from-[#2618a5] via-[#5f72b1] to-[#2618a5] dark:from-[#010824] dark:via-[#141d3b] dark:to-[#010925]">
      <div className="container mx-auto text-center text-gray-700 font-semibold dark:text-gray-400">
        <p>&copy; {new Date().getFullYear()} Muhammad Abdul Basit. All rights reserved.</p>
      </div>
    </footer>
  );
}
