import { useNavigate } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { useAuthStore } from "../store/authStore";
import ProfileCard from "../components/common/ProfileCard";

const More: React.FC = () => {
  const navigate = useNavigate();
  const { logout, user } = useAuthStore();

  return (
    <Layout title="더보기">
      {
        <>
          <ProfileCard />
          <div className="flex flex-col gap-2 mt-4">
            {user ? (
              <>
                <button
                  onClick={logout}
                  className="w-full px-4 py-2 bg-white text-[#495057] rounded-md font-medium hover:bg-[#f1f3f5] transition"
                >
                  로그아웃
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => navigate("/login")}
                  className="w-full px-4 py-2 bg-white text-[#495057] rounded-md font-medium hover:bg-[#f1f3f5] transition"
                >
                  로그인
                </button>
              </>
            )}

            {user && (
              <>
                <button
                  onClick={() => navigate("/profile/edit")}
                  className="w-full px-4 py-2 bg-white text-[#495057] rounded-md font-medium hover:bg-[#f1f3f5] transition"
                >
                  회원정보 수정
                </button>
                <button
                  onClick={() => navigate("/profile/delete")}
                  className="w-full px-4 py-2 bg-[#D76767] text-white rounded-md font-medium hover:bg-[#C85555] transition"
                >
                  회원탈퇴
                </button>
              </>
            )}
          </div>
        </>
      }
    </Layout>
  );
};

export default More;
