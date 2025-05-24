export default function Footer() {
    return (
        <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-6">
            <div className="container mx-auto text-center">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                    © {new Date().getFullYear()} Bhartkumar Boricha. All rights reserved.
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                    Built with ❤️ using React + Vite and Tailwind CSS
                </p>
            </div>
        </footer>
    );
}