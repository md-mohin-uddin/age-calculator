// Autofill today's date on page load
window.onload = () => {
    const today = new Date();
    document.getElementById("todayDay").value = today.getDate();
    document.getElementById("todayMonth").value = today.getMonth() + 1;
    document.getElementById("todayYear").value = today.getFullYear();
  };
  
  function calculateAge() {
    const bd = parseInt(document.getElementById("birthDay").value);
    const bm = parseInt(document.getElementById("birthMonth").value) - 1;
    const by = parseInt(document.getElementById("birthYear").value);
  
    const td = parseInt(document.getElementById("todayDay").value);
    const tm = parseInt(document.getElementById("todayMonth").value) - 1;
    const ty = parseInt(document.getElementById("todayYear").value);
  
    const birthDate = new Date(by, bm, bd);
    const todayDate = new Date(ty, tm, td);
  
    if (isNaN(birthDate.getTime()) || isNaN(todayDate.getTime())) {
      document.getElementById("result").innerText = "⚠️ Please enter valid dates.";
      return;
    }
  
    if (birthDate > todayDate) {
      document.getElementById("result").innerText = "🚫 Birth date can't be in the future.";
      return;
    }
  
    let years = ty - by;
    let months = tm - bm;
    let days = td - bd;
  
    // Adjust if current month/day is less than birth month/day
    if (days < 0) {
      months--;
      const prevMonth = new Date(ty, tm, 0); // last day of previous month
      days += prevMonth.getDate();
    }
  
    if (months < 0) {
      years--;
      months += 12;
    }
  
    document.getElementById("result").innerText = `✅ Age is: ${years} years, ${months} months, ${days} days.`;
  }
  