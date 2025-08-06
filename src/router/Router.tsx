import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Login from "../pages/user/Login";
import Signup from "../pages/user/Signup";
import NotePage from "../pages/note/NotePage";
import NoteForm from "../pages/note/NoteForm";
import NoteDetail from "../pages/note/NoteDetail";
import More from "../pages/More";
import UserEdit from "../pages/user/UserEdit";
import Subjects from "../pages/subject/Subjects";
import SubjectFormPage from "../pages/subject/SubjectFormPage";
import SubjectDetail from "../pages/subject/SubjectDetail";
import Groups from "../pages/group/Groups";
import GroupSearch from "../pages/group/GroupSearch";
import GroupDetail from "../pages/group/GroupDetail";
import GroupForm from "../pages/group/GroupForm";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/note" element={<NotePage />} />
        <Route path="/note/create" element={<NoteForm />} />
        <Route path="/note/:noteId/edit" element={<NoteForm />} />
        <Route path="/note/:noteId" element={<NoteDetail />} />
        <Route path="/subject" element={<Subjects />} />
        <Route path="/subject/create" element={<SubjectFormPage />} />
        <Route path="/subject/:subjectId/edit" element={<SubjectFormPage />} />
        <Route path="/subject/:subjectId" element={<SubjectDetail />} />
        <Route path="/group" element={<Groups />} />
        <Route path="/group/search" element={<GroupSearch />} />
        <Route path="/group/create" element={<GroupForm />} />
        <Route path="/group/:groupId" element={<GroupDetail />} />
        <Route path="/group/:groupId/edit" element={<GroupForm />} />
        <Route path="/more" element={<More />} />
        <Route path="/profile/edit" element={<UserEdit />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
