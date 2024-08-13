import { getStaffs } from "@/services/staffs"
import SubmitForm from "./SubmitForm"
import { StaffEntity, StaffType } from "@/entities/Staffs"
import TichXanh from "@/assets/images/tichxanh.png"
import Image from "next/image"

async function LienHe({ searchParams }: { searchParams: { [key: string]: string | undefined } }) {

  const { data } = await getStaffs({ search: searchParams.search }) as { data: StaffEntity[] }

  return (
    <>
      <div className="mb-4 text-white">
        <div className="pt-10 flex flex-col md:flex-row w-full">
          <div className="bg-[url('/bg_xacthuc.jpg')] min-h-[400px] w-full bg-cover py-[50px] relative before:content-[''] before:bg-[#607c6c9e] before:absolute before:w-full before:h-full before:top-0 z-0">
            <div className="flex justify-center items-center flex-col relative text-center">
              <div className="mt-12 mb-4 md:mb-8">
                <h1 className="text-3xl md:text-6xl uppercase font-bold">Xác thực thông tin nhân viên</h1>
              </div>
              <div className="mb-4">
                <p className="text-xl md:text-3xl font-bold">Hãy chắc chắn rằng bạn đang được hỗ trợ từ nhân viên được ủy quyền bởi HOSHI chính hãng</p>
              </div>
              <div className="mb-4 border-2 p-2 bg-white rounded-md">
                <p className="text-sm md:text-xl text-blue-700 font-bold">Vui lòng nhập số điện thoại hoặc số tài khoản ngân hàng để xác thực nhân viên</p>
              </div>
              <SubmitForm />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-6xl m-auto mb-4">
        <div className="flex flex-col">
          {data.length === 0 ? (
            <h2 className="text-2xl font-bold text-center">Không tồn tại thông tin</h2>
          ) : (
            data.map(staff => (
              <div key={staff.id} className="flex justify-center max-md:mx-2 mb-2">
                {staff.type === 'IDENTIFIER' && (
                  <div className="flex flex-col md:flex-row border-4 px-4 py-2 rounded-md border-[#81811b]">
                    <div>
                      <p className="text-3xl font-bold text-center text-[#f18017] mb-2">{staff.name}</p>
                      {staff.identifier && (
                        <p className="text-2xl font-bold text-center text-[#f18017]">{staff.identifier}</p>
                      )}
                      <div className="flex justify-center">
                        <p className="text-base md:text-xl font-bold text-center mr-2">{StaffType[staff.type as keyof typeof StaffType]}</p>
                        <Image src={TichXanh} alt="tich-xanh" width={100} height={100} className="w-5" />
                      </div>
                    </div>
                    <div className="md:ml-4 max-md:flex justify-center max-md:mt-4">
                      {staff.imageUrl && <Image src={staff.imageUrl} alt={staff.name} width={100} height={100} className="h-full max-md:w-full rounded-md" />}
                    </div>
                  </div>
                )}
                {staff.type === 'BANK' && (
                  <div className="flex flex-col md:flex-row border-4 px-4 py-2 rounded-md border-[#81811b]">
                    <div>
                      <p className="text-3xl font-bold text-center text-[#f18017] mb-2">{staff.name}</p>
                      {staff.bankNumber && (
                        <>
                          <p className="text-2xl font-bold text-center text-[#f18017] mb-2">STK ngân hàng: {staff.bankNumber}</p>
                          <p className="text-2xl font-bold text-center text-[#f18017] mb-2">Tên ngân hàng: {staff.bankName}</p>
                        </>
                      )}
                      <div className="flex justify-center">
                        <p className="text-base md:text-xl font-bold text-center mr-2">{StaffType[staff.type as keyof typeof StaffType]}</p>
                        <Image src={TichXanh} alt="tich-xanh" width={100} height={100} className="w-5" />
                      </div>
                    </div>
                    <div className="md:ml-4 max-md:flex justify-center max-md:mt-4">
                      {staff.imageUrl && <Image src={staff.imageUrl} alt={staff.name} width={100} height={100} className="h-full max-md:w-full rounded-md" />}
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </>
  )
}

export default LienHe