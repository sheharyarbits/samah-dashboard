import {
  faSearch,
  faEllipsis,
  faL,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import { DataTableDirective } from 'angular-datatables';

interface yourData {
  orderNumber: string;
  orderDate: string;
  salesChannel: string;
  brandName: string;
  supplier: string;
  specialOrderNo: string;
  productionMonth: string;
  eta: string;
  status: string;
  statusBg: string;
  statusColor: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class IndividualColumnFilteringComponent
  implements OnInit, AfterViewInit
{
  // Add a property to control the visibility of the dropdown
  showDropdown = false;
  dropdown: any = null;
  faPlus = faPlus;
  dropdownLinks: any = null;
  orderValue = '';
  salesValue = '';
  supplierValue = '';
  prodMonthValue = '';
  brandValue = '';
  detailValue = '';
  specialOrderValue = '';
  statusValue = '';

  // Add a method to toggle the dropdown visibility
  dummyData: yourData[] = [
    {
      orderNumber: 'ORD001',
      orderDate: '2024-01-24',
      salesChannel: 'Online',
      brandName: 'ABC',
      supplier: 'Supplier A',
      specialOrderNo: 'SPO123',
      productionMonth: 'February 2024',
      eta: '2024-03-15',
      status: 'Draft',
      statusBg: '#d9d9d9',
      statusColor: '#3c3c3c',
    },
    {
      orderNumber: 'ORD002',
      orderDate: '2024-01-25',
      salesChannel: 'In-store',
      brandName: 'XYZ',
      supplier: 'Supplier B',
      specialOrderNo: 'SPO124',
      productionMonth: 'March 2024',
      eta: '2024-04-10',
      status: 'Pending Approval',
      statusBg: '#ffefb4',
      statusColor: '#fdd857',
    },
    {
      orderNumber: 'ORD003',
      orderDate: '2024-02-05',
      salesChannel: 'Online',
      brandName: 'DEF',
      supplier: 'Supplier C',
      specialOrderNo: 'SPO125',
      productionMonth: 'April 2024',
      eta: '2024-05-20',
      status: 'Approved',
      statusBg: '#c7f0b8',
      statusColor: '#9bbe8e',
    },
    {
      orderNumber: 'ORD004',
      orderDate: '2024-02-15',
      salesChannel: 'In-store',
      brandName: 'GHI',
      supplier: 'Supplier D',
      specialOrderNo: 'SPO126',
      productionMonth: 'May 2024',
      eta: '2024-06-05',
      status: 'Rejected',
      statusBg: '#fed2d2',
      statusColor: '#fa8383',
    },
    {
      orderNumber: 'ORD005',
      orderDate: '2024-03-01',
      salesChannel: 'Online',
      brandName: 'JKL',
      supplier: 'Supplier E',
      specialOrderNo: 'SPO127',
      productionMonth: 'June 2024',
      eta: '2024-07-15',
      status: 'Ordered',
      statusBg: '#a6c9f8',
      statusColor: '#8ab6f3',
    },
    {
      orderNumber: 'ORD006',
      orderDate: '2024-03-10',
      salesChannel: 'In-store',
      brandName: 'MNO',
      supplier: 'Supplier F',
      specialOrderNo: 'SPO128',
      productionMonth: 'July 2024',
      eta: '2024-08-10',
      status: 'Confirmed',
      statusBg: '#dab3e4',
      statusColor: '#be6bd3',
    },
    {
      orderNumber: 'ORD007',
      orderDate: '2024-04-02',
      salesChannel: 'Online',
      brandName: 'PQR',
      supplier: 'Supplier G',
      specialOrderNo: 'SPO129',
      productionMonth: 'August 2024',
      eta: '2024-09-20',
      status: 'Needs Revision',
      statusBg: '#fdda7a',
      statusColor: '#c99615',
    },
  ];

  filteredData: yourData[] = this.dummyData;

  dropdowns = [
    {
      status: 'Draft',
      links: [
        { title: 'Edit Order' },
        { title: 'Delete Order' },
        { title: 'View Details' },
        { title: 'Send for Approval' },
      ],
    },
    {
      status: 'Pending Approval',
      links: [{ title: 'View Details' }],
    },
    {
      status: 'Approved',
      links: [
        { title: 'View Details' },
        { title: 'Export to Excel' },
        { title: 'Mark as Ordered' },
      ],
    },
    {
      status: 'Rejected',
      links: [{ title: 'View Details' }],
    },
    {
      status: 'Ordered',
      links: [{ title: 'Add Order Allocation' }, { title: 'View Details' }],
    },
    {
      status: 'Confirmed',
      links: [{ title: 'View Details' }],
    },
    {
      status: 'Needs Revision',
      links: [{ title: 'View Details' }, { title: 'Edit Order' }],
    },
  ];

  orderFilter(e: any) {
    this.orderValue = e.target.value;
    this.filteredData = this.dummyData.filter((item) =>
      item.orderNumber.toLowerCase().includes(this.orderValue.toLowerCase())
    );
  }

  salesFilter(e: any) {
    this.salesValue = e.target.value;
    this.filteredData = this.dummyData.filter((item) =>
      item.salesChannel.toLowerCase().includes(this.salesValue.toLowerCase())
    );
  }
  supplierFilter(e: any) {
    this.supplierValue = e.target.value;
    this.filteredData = this.dummyData.filter((item) =>
      item.supplier.toLowerCase().includes(this.supplierValue.toLowerCase())
    );
  }
  prodMonthFilter(e: any) {
    this.prodMonthValue = e.target.value;
    this.filteredData = this.dummyData.filter((item) =>
      item.productionMonth
        .toLowerCase()
        .includes(this.prodMonthValue.toLowerCase())
    );
  }
  brandFilter(e: any) {
    this.brandValue = e.target.value;
    this.filteredData = this.dummyData.filter((item) =>
      item.brandName.toLowerCase().includes(this.brandValue.toLowerCase())
    );
  }
  detailFilter(e: any) {
    this.detailValue = e.target.value;
    this.filteredData = this.dummyData.filter((item) =>
      item.orderDate.toLowerCase().includes(this.detailValue.toLowerCase())
    );
  }
  specialOrderFilter(e: any) {
    this.specialOrderValue = e.target.value;
    this.filteredData = this.dummyData.filter((item) =>
      item.specialOrderNo
        .toLowerCase()
        .includes(this.specialOrderValue.toLowerCase())
    );
  }
  statusFilter(e: any) {
    this.statusValue = e.target.value;
    this.filteredData = this.dummyData.filter((item) =>
      item.status.toLowerCase().includes(this.statusValue.toLowerCase())
    );
  }

  toggleDropdown(item: any) {
    console.log(this.showDropdown);

    if (item.orderNumber === this.dropdown && this.showDropdown === true) {
      this.showDropdown = false;
      console.log('jelsdkaf');
    } else if (
      item.orderNumber !== this.dropdown ||
      this.showDropdown === false
    ) {
      console.log('dsklfaj');
      this.showDropdown = true;
    }
    this.dropdown = item.orderNumber;

    [this.dropdownLinks] = this.dropdowns.filter(
      (links: any) => links.status === item.status
    );

    console.log(this.dropdownLinks.links);
    console.log(this.showDropdown);
  }
  faSearch = faSearch;
  faEllipsis = faEllipsis;

  @ViewChild(DataTableDirective, { static: false })
  datatableElement!: DataTableDirective;

  dtOptions: DataTables.Settings = {
    responsive: true,
  };

  ngOnInit(): void {
    const staticData = [
      { id: 1, firstName: 'John', lastName: 'Wick' },
      { id: 2, firstName: 'Jane', lastName: 'Doe' },
    ];
    this.dtOptions = {
      ajax: 'data/data.json',
      data: staticData,
      columns: [
        {
          title: 'ID',
          data: 'id',
        },
        {
          title: 'First name',
          data: 'firstName',
        },
        {
          title: 'Last name',
          data: 'lastName',
        },
      ],
      responsive: true,
    };
  }

  ngAfterViewInit(): void {
    // this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
    //   dtInstance.columns().every(function () {
    //     const that = this;
    //     // Handle keyup and change events for input elements in the footer
    //     $('input', that.footer()).on('keyup change', function () {
    //       if (that.search() !== (this as HTMLInputElement).value) {
    //         that.search((this as HTMLInputElement).value).draw();
    //       }
    //     });
    //   });
    // });
  }
}
