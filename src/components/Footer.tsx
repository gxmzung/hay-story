export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-neutral-500">
        <p className="font-semibold tracking-[0.3em] text-black">
          HAYOUNG STUDIO
        </p>

        <p className="mt-3">
          Started from a dream. Built for your story.
        </p>

        <p className="mt-3">
          Developed by 이영준 · Computer Science Developer
        </p>

        <div className="mt-6 flex flex-wrap gap-4">
          <span>About</span>
          <span>Custom Order</span>
          <span>AI Style Finder</span>
          <span>Designer Talk</span>
        </div>
      </div>
    </footer>
  );
}