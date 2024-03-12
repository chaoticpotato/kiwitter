/*
"fullname": "Ms. Judy Metz",
"avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/268.jpg",
"email": "Mariane_Hodkiewicz@hotmail.com",
"username": "Zane_Anderson94",
"password": "8f1BSzKkr6T48hb"
*/

export default function Signup() {
  return (
    <div className="max-w-xs mx-auto pt-4 pb-10">
      <h1 className="text-3xl py-2 text-center">Kayıt ol</h1>
      <form className="flex flex-col gap-3">
        <label className="form-line">
          <div className="flex justify-between items-end">
            <span className="form-label">İsim soyisim</span>
            <span className="error-message">Bu alan zorunlu</span>
          </div>
          <input type="text" />
        </label>
        <label className="form-line">
          <div className="flex justify-between items-end">
            <span className="form-label">Email</span>
            <span className="error-message">Bu alan zorunlu</span>
          </div>
          <input type="email" />
        </label>
        <label className="form-line">
          <div className="flex justify-between items-end">
            <span className="form-label">Password</span>
            <span className="error-message">Bu alan zorunlu</span>
          </div>
          <input type="password" />
        </label>
        <label className="form-line">
          <div className="flex justify-between items-end">
            <span className="form-label">Takma ad</span>
            <span className="error-message">Bu alan zorunlu</span>
          </div>
          <input type="text" />
        </label>
        <label className="form-line">
          <div className="flex justify-between items-end">
            <span className="form-label">Avatar Linki</span>
          </div>
          <input type="url" />
        </label>
        <button className="bg-lime-700 text-white rounded py-2 hover:bg-lime-600">
          Kayıt ol
        </button>
      </form>
    </div>
  );
}
