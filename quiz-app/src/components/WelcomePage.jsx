function WelcomePage({ onNext }) {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-4">
    
      <button
        onClick={onNext}
        className="bg-orange-500 text-white px-6 py-3 rounded-xl hover:bg-orange-600 transition"
      >
        Get Started
      </button>
    </div>
  );
}

export default WelcomePage;
