import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-edpro-light-bg flex items-center justify-center p-4">
      <div className="text-center max-w-md">
        <div className="text-8xl font-extrabold text-edpro-primary mb-4">
          404
        </div>
        <h1 className="text-2xl font-bold text-edpro-dark mb-3">
          Page Not Found
        </h1>
        <p className="text-edpro-muted mb-8">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/en"
          className="btn-primary px-8 py-3 rounded-xl inline-flex"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}
