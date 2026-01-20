export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-gray-200 dark:border-gray-800 mt-20">
      <div className="container mx-auto text-center text-gray-600 dark:text-gray-400">
        <p>&copy; {new Date().getFullYear()} Muhammad Abdul Basit. All rights reserved.</p>
      </div>
    </footer>
  );
}
