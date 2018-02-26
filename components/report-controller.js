/* global excelUpload, angular */


//Home controller
ExportCSVApp.controller('reportController',
    function ($rootScope,
        $scope,
        $sanitize,
        $sce,
        $timeout,
        OrgUnitService,
        PeriodService) {


        $scope.orgUnitGroups = {};

		/* **************************************************************************************
		 **** RETRIEVING ROOT JSON AND NEEDED DATA ***********************************************
		 ************************************************************************************* **/
        $scope.controllerData = {}
        //  $scope.value = 0;
        //  var filename = 'members.csv';

        var aoc = 'X66r2y4EuwS';
        var more25 = 'CrE6h9KphAO';
        var less25 = 'Y2c16vWPBox';

        $scope.addData = function (data, count1) {
            console.log(data);
            $scope.orgId = data.orgunit.id;
            $scope.periodId = data.period;

            console.log($scope.orgId);
            console.log($scope.periodId);

            if ($scope.orgId == "FrKiTIjDUxU") // Associated clinincs
            {

                $scope.code = "AS205-0000";
            }

            if ($scope.orgId == "oPJQbzZ20Ff") // Mobile clinincs
            {

                $scope.code = "OU205-0000";
            }

            if ($scope.orgId == "VnGNfO08w38") // Static clinincs
            {

                $scope.code = "CL205-0000";
            }

            if ($scope.orgId == "GhuHmwRnPBs") // CBD clinincs
            {

                $scope.code = "CB205-0000";
            }

            // new user more than 25
            $.when(
                $.getJSON("../../analytics.json?dimension=dx:EtBBGY79cDv.J83ylYGKhbA;EtBBGY79cDv.YFztQ2vR71N;EtBBGY79cDv.pslMIlKFXBh;EtBBGY79cDv.HUIWuBTBq08;EtBBGY79cDv.yHSAPCLxecr;EtBBGY79cDv.Pch5POkRK8D;EtBBGY79cDv.UTolIBbDJGH;EtBBGY79cDv.cJJJCGGLTOi;EtBBGY79cDv.V0L9n6BBxKp;EtBBGY79cDv.VDDnYYh4gAK;EtBBGY79cDv.XpvgbSHy43w;EtBBGY79cDv.qEaRHNTa7mi;EtBBGY79cDv.cSY68ZH4wZg;EtBBGY79cDv.Z9N77nA1ZwN;EtBBGY79cDv.F1vIyc2K8oq;EtBBGY79cDv.SKR6BiGmH39;EtBBGY79cDv.K53Thqzzjya;EtBBGY79cDv.XBuwUD1utmH;GebmB0TKmJT.J83ylYGKhbA;GebmB0TKmJT.YFztQ2vR71N;GebmB0TKmJT.pslMIlKFXBh;GebmB0TKmJT.HUIWuBTBq08;GebmB0TKmJT.yHSAPCLxecr;GebmB0TKmJT.Pch5POkRK8D;GebmB0TKmJT.UTolIBbDJGH;GebmB0TKmJT.cJJJCGGLTOi;GebmB0TKmJT.V0L9n6BBxKp;GebmB0TKmJT.VDDnYYh4gAK;GebmB0TKmJT.XpvgbSHy43w;GebmB0TKmJT.qEaRHNTa7mi;GebmB0TKmJT.cSY68ZH4wZg;GebmB0TKmJT.Z9N77nA1ZwN;GebmB0TKmJT.F1vIyc2K8oq;GebmB0TKmJT.SKR6BiGmH39;GebmB0TKmJT.K53Thqzzjya;GebmB0TKmJT.XBuwUD1utmH;s2AtBJcVboI.J83ylYGKhbA;s2AtBJcVboI.YFztQ2vR71N;s2AtBJcVboI.pslMIlKFXBh;s2AtBJcVboI.HUIWuBTBq08;s2AtBJcVboI.yHSAPCLxecr;s2AtBJcVboI.Pch5POkRK8D;s2AtBJcVboI.UTolIBbDJGH;s2AtBJcVboI.cJJJCGGLTOi;s2AtBJcVboI.V0L9n6BBxKp;s2AtBJcVboI.VDDnYYh4gAK;s2AtBJcVboI.XpvgbSHy43w;s2AtBJcVboI.qEaRHNTa7mi;s2AtBJcVboI.cSY68ZH4wZg;s2AtBJcVboI.Z9N77nA1ZwN;s2AtBJcVboI.F1vIyc2K8oq;s2AtBJcVboI.SKR6BiGmH39;s2AtBJcVboI.K53Thqzzjya;s2AtBJcVboI.XBuwUD1utmH;dtISJbwPDx0.J83ylYGKhbA;dtISJbwPDx0.YFztQ2vR71N;dtISJbwPDx0.pslMIlKFXBh;dtISJbwPDx0.HUIWuBTBq08;dtISJbwPDx0.yHSAPCLxecr;dtISJbwPDx0.Pch5POkRK8D;dtISJbwPDx0.UTolIBbDJGH;dtISJbwPDx0.cJJJCGGLTOi;dtISJbwPDx0.V0L9n6BBxKp;dtISJbwPDx0.VDDnYYh4gAK;dtISJbwPDx0.XpvgbSHy43w;dtISJbwPDx0.qEaRHNTa7mi;dtISJbwPDx0.cSY68ZH4wZg;dtISJbwPDx0.Z9N77nA1ZwN;dtISJbwPDx0.F1vIyc2K8oq;dtISJbwPDx0.SKR6BiGmH39;dtISJbwPDx0.K53Thqzzjya;dtISJbwPDx0.XBuwUD1utmH;F9oqcI8uVd7.J83ylYGKhbA;F9oqcI8uVd7.YFztQ2vR71N;F9oqcI8uVd7.pslMIlKFXBh;F9oqcI8uVd7.HUIWuBTBq08;F9oqcI8uVd7.yHSAPCLxecr;F9oqcI8uVd7.Pch5POkRK8D;F9oqcI8uVd7.UTolIBbDJGH;F9oqcI8uVd7.cJJJCGGLTOi;F9oqcI8uVd7.V0L9n6BBxKp;F9oqcI8uVd7.VDDnYYh4gAK;F9oqcI8uVd7.XpvgbSHy43w;F9oqcI8uVd7.qEaRHNTa7mi;F9oqcI8uVd7.cSY68ZH4wZg;F9oqcI8uVd7.Z9N77nA1ZwN;F9oqcI8uVd7.F1vIyc2K8oq;F9oqcI8uVd7.SKR6BiGmH39;F9oqcI8uVd7.K53Thqzzjya;F9oqcI8uVd7.XBuwUD1utmH;Kj97LAJwVHS.J83ylYGKhbA;Kj97LAJwVHS.YFztQ2vR71N;Kj97LAJwVHS.pslMIlKFXBh;Kj97LAJwVHS.HUIWuBTBq08;Kj97LAJwVHS.yHSAPCLxecr;Kj97LAJwVHS.Pch5POkRK8D;Kj97LAJwVHS.UTolIBbDJGH;Kj97LAJwVHS.cJJJCGGLTOi;Kj97LAJwVHS.V0L9n6BBxKp;Kj97LAJwVHS.VDDnYYh4gAK;Kj97LAJwVHS.XpvgbSHy43w;Kj97LAJwVHS.qEaRHNTa7mi;Kj97LAJwVHS.cSY68ZH4wZg;Kj97LAJwVHS.Z9N77nA1ZwN;Kj97LAJwVHS.F1vIyc2K8oq;Kj97LAJwVHS.SKR6BiGmH39;Kj97LAJwVHS.K53Thqzzjya;Kj97LAJwVHS.XBuwUD1utmH;MyyyNqkLH31.J83ylYGKhbA;MyyyNqkLH31.YFztQ2vR71N;MyyyNqkLH31.pslMIlKFXBh;MyyyNqkLH31.HUIWuBTBq08;MyyyNqkLH31.yHSAPCLxecr;MyyyNqkLH31.Pch5POkRK8D;MyyyNqkLH31.UTolIBbDJGH;MyyyNqkLH31.cJJJCGGLTOi;MyyyNqkLH31.V0L9n6BBxKp;MyyyNqkLH31.VDDnYYh4gAK;MyyyNqkLH31.XpvgbSHy43w;MyyyNqkLH31.qEaRHNTa7mi;MyyyNqkLH31.cSY68ZH4wZg;MyyyNqkLH31.Z9N77nA1ZwN;MyyyNqkLH31.F1vIyc2K8oq;MyyyNqkLH31.SKR6BiGmH39;MyyyNqkLH31.K53Thqzzjya;MyyyNqkLH31.XBuwUD1utmH;EKBeCyCTs6N.J83ylYGKhbA;EKBeCyCTs6N.YFztQ2vR71N;EKBeCyCTs6N.pslMIlKFXBh;EKBeCyCTs6N.HUIWuBTBq08;EKBeCyCTs6N.yHSAPCLxecr;EKBeCyCTs6N.Pch5POkRK8D;EKBeCyCTs6N.UTolIBbDJGH;EKBeCyCTs6N.cJJJCGGLTOi;EKBeCyCTs6N.V0L9n6BBxKp;EKBeCyCTs6N.VDDnYYh4gAK;EKBeCyCTs6N.XpvgbSHy43w;EKBeCyCTs6N.qEaRHNTa7mi;EKBeCyCTs6N.cSY68ZH4wZg;EKBeCyCTs6N.Z9N77nA1ZwN;EKBeCyCTs6N.F1vIyc2K8oq;EKBeCyCTs6N.SKR6BiGmH39;EKBeCyCTs6N.K53Thqzzjya;EKBeCyCTs6N.XBuwUD1utmH;cBf5PFB4M3V.J83ylYGKhbA;cBf5PFB4M3V.YFztQ2vR71N;cBf5PFB4M3V.pslMIlKFXBh;cBf5PFB4M3V.HUIWuBTBq08;cBf5PFB4M3V.yHSAPCLxecr;cBf5PFB4M3V.Pch5POkRK8D;cBf5PFB4M3V.UTolIBbDJGH;cBf5PFB4M3V.cJJJCGGLTOi;cBf5PFB4M3V.V0L9n6BBxKp;cBf5PFB4M3V.VDDnYYh4gAK;cBf5PFB4M3V.XpvgbSHy43w;cBf5PFB4M3V.qEaRHNTa7mi;cBf5PFB4M3V.cSY68ZH4wZg;cBf5PFB4M3V.Z9N77nA1ZwN;cBf5PFB4M3V.F1vIyc2K8oq;cBf5PFB4M3V.SKR6BiGmH39;cBf5PFB4M3V.K53Thqzzjya;cBf5PFB4M3V.XBuwUD1utmH;YAZZmQ3cEb5.J83ylYGKhbA;YAZZmQ3cEb5.YFztQ2vR71N;YAZZmQ3cEb5.pslMIlKFXBh;YAZZmQ3cEb5.HUIWuBTBq08;YAZZmQ3cEb5.yHSAPCLxecr;YAZZmQ3cEb5.Pch5POkRK8D;YAZZmQ3cEb5.UTolIBbDJGH;YAZZmQ3cEb5.cJJJCGGLTOi;YAZZmQ3cEb5.V0L9n6BBxKp;YAZZmQ3cEb5.VDDnYYh4gAK;YAZZmQ3cEb5.XpvgbSHy43w;YAZZmQ3cEb5.qEaRHNTa7mi;YAZZmQ3cEb5.cSY68ZH4wZg;YAZZmQ3cEb5.Z9N77nA1ZwN;YAZZmQ3cEb5.F1vIyc2K8oq;YAZZmQ3cEb5.SKR6BiGmH39;YAZZmQ3cEb5.K53Thqzzjya;YAZZmQ3cEb5.XBuwUD1utmH;dcopt8wVXc9.J83ylYGKhbA;dcopt8wVXc9.YFztQ2vR71N;dcopt8wVXc9.pslMIlKFXBh;dcopt8wVXc9.HUIWuBTBq08;dcopt8wVXc9.yHSAPCLxecr;dcopt8wVXc9.Pch5POkRK8D;dcopt8wVXc9.UTolIBbDJGH;dcopt8wVXc9.cJJJCGGLTOi;dcopt8wVXc9.V0L9n6BBxKp;dcopt8wVXc9.VDDnYYh4gAK;dcopt8wVXc9.XpvgbSHy43w;dcopt8wVXc9.qEaRHNTa7mi;dcopt8wVXc9.cSY68ZH4wZg;dcopt8wVXc9.Z9N77nA1ZwN;dcopt8wVXc9.F1vIyc2K8oq;dcopt8wVXc9.SKR6BiGmH39;dcopt8wVXc9.K53Thqzzjya;dcopt8wVXc9.XBuwUD1utmH;UII6zgEqax1.J83ylYGKhbA;UII6zgEqax1.YFztQ2vR71N;UII6zgEqax1.pslMIlKFXBh;UII6zgEqax1.HUIWuBTBq08;UII6zgEqax1.yHSAPCLxecr;UII6zgEqax1.Pch5POkRK8D;UII6zgEqax1.UTolIBbDJGH;UII6zgEqax1.cJJJCGGLTOi;UII6zgEqax1.V0L9n6BBxKp;UII6zgEqax1.VDDnYYh4gAK;UII6zgEqax1.XpvgbSHy43w;UII6zgEqax1.qEaRHNTa7mi;UII6zgEqax1.cSY68ZH4wZg;UII6zgEqax1.Z9N77nA1ZwN;UII6zgEqax1.F1vIyc2K8oq;UII6zgEqax1.SKR6BiGmH39;UII6zgEqax1.K53Thqzzjya;UII6zgEqax1.XBuwUD1utmH;uACPYWLvBiS.J83ylYGKhbA;uACPYWLvBiS.YFztQ2vR71N;uACPYWLvBiS.pslMIlKFXBh;uACPYWLvBiS.HUIWuBTBq08;uACPYWLvBiS.yHSAPCLxecr;uACPYWLvBiS.Pch5POkRK8D;uACPYWLvBiS.UTolIBbDJGH;uACPYWLvBiS.cJJJCGGLTOi;uACPYWLvBiS.V0L9n6BBxKp;uACPYWLvBiS.VDDnYYh4gAK;uACPYWLvBiS.XpvgbSHy43w;uACPYWLvBiS.qEaRHNTa7mi;uACPYWLvBiS.cSY68ZH4wZg;uACPYWLvBiS.Z9N77nA1ZwN;uACPYWLvBiS.F1vIyc2K8oq;uACPYWLvBiS.SKR6BiGmH39;uACPYWLvBiS.K53Thqzzjya;uACPYWLvBiS.XBuwUD1utmH;Gs9BpNaBrXY.J83ylYGKhbA;Gs9BpNaBrXY.YFztQ2vR71N;Gs9BpNaBrXY.pslMIlKFXBh;Gs9BpNaBrXY.HUIWuBTBq08;Gs9BpNaBrXY.yHSAPCLxecr;Gs9BpNaBrXY.Pch5POkRK8D;Gs9BpNaBrXY.UTolIBbDJGH;Gs9BpNaBrXY.cJJJCGGLTOi;Gs9BpNaBrXY.V0L9n6BBxKp;Gs9BpNaBrXY.VDDnYYh4gAK;Gs9BpNaBrXY.XpvgbSHy43w;Gs9BpNaBrXY.qEaRHNTa7mi;Gs9BpNaBrXY.cSY68ZH4wZg;Gs9BpNaBrXY.Z9N77nA1ZwN;Gs9BpNaBrXY.F1vIyc2K8oq;Gs9BpNaBrXY.SKR6BiGmH39;Gs9BpNaBrXY.K53Thqzzjya;Gs9BpNaBrXY.XBuwUD1utmH;SXoo7ANON27.J83ylYGKhbA;SXoo7ANON27.YFztQ2vR71N;SXoo7ANON27.pslMIlKFXBh;SXoo7ANON27.HUIWuBTBq08;SXoo7ANON27.yHSAPCLxecr;SXoo7ANON27.Pch5POkRK8D;SXoo7ANON27.UTolIBbDJGH;SXoo7ANON27.cJJJCGGLTOi;SXoo7ANON27.V0L9n6BBxKp;SXoo7ANON27.VDDnYYh4gAK;SXoo7ANON27.XpvgbSHy43w;SXoo7ANON27.qEaRHNTa7mi;SXoo7ANON27.cSY68ZH4wZg;SXoo7ANON27.Z9N77nA1ZwN;SXoo7ANON27.F1vIyc2K8oq;SXoo7ANON27.SKR6BiGmH39;SXoo7ANON27.K53Thqzzjya;SXoo7ANON27.XBuwUD1utmH;dlEepWvRq4k.J83ylYGKhbA;dlEepWvRq4k.YFztQ2vR71N;dlEepWvRq4k.pslMIlKFXBh;dlEepWvRq4k.HUIWuBTBq08;dlEepWvRq4k.yHSAPCLxecr;dlEepWvRq4k.Pch5POkRK8D;dlEepWvRq4k.UTolIBbDJGH;dlEepWvRq4k.cJJJCGGLTOi;dlEepWvRq4k.V0L9n6BBxKp;dlEepWvRq4k.VDDnYYh4gAK;dlEepWvRq4k.XpvgbSHy43w;dlEepWvRq4k.qEaRHNTa7mi;dlEepWvRq4k.cSY68ZH4wZg;dlEepWvRq4k.Z9N77nA1ZwN;dlEepWvRq4k.F1vIyc2K8oq;dlEepWvRq4k.SKR6BiGmH39;dlEepWvRq4k.K53Thqzzjya;dlEepWvRq4k.XBuwUD1utmH;FZSHapEkYE6.J83ylYGKhbA;FZSHapEkYE6.YFztQ2vR71N;FZSHapEkYE6.pslMIlKFXBh;FZSHapEkYE6.HUIWuBTBq08;FZSHapEkYE6.yHSAPCLxecr;FZSHapEkYE6.Pch5POkRK8D;FZSHapEkYE6.UTolIBbDJGH;FZSHapEkYE6.cJJJCGGLTOi;FZSHapEkYE6.V0L9n6BBxKp;FZSHapEkYE6.VDDnYYh4gAK;FZSHapEkYE6.XpvgbSHy43w;FZSHapEkYE6.qEaRHNTa7mi;FZSHapEkYE6.cSY68ZH4wZg;FZSHapEkYE6.Z9N77nA1ZwN;FZSHapEkYE6.F1vIyc2K8oq;FZSHapEkYE6.SKR6BiGmH39;FZSHapEkYE6.K53Thqzzjya;FZSHapEkYE6.XBuwUD1utmH;&dimension=ou:OU_GROUP-" + $scope.orgId + "&filter=pe:" + $scope.periodId + "&displayProperty=NAME", {
                    format: "json"
                }), // new user less than 25
                $.getJSON("../../analytics.json?dimension=dx:EtBBGY79cDv.J83ylYGKhbA;EtBBGY79cDv.YFztQ2vR71N;EtBBGY79cDv.pslMIlKFXBh;EtBBGY79cDv.HUIWuBTBq08;EtBBGY79cDv.yHSAPCLxecr;EtBBGY79cDv.Pch5POkRK8D;EtBBGY79cDv.UTolIBbDJGH;EtBBGY79cDv.cJJJCGGLTOi;EtBBGY79cDv.V0L9n6BBxKp;EtBBGY79cDv.VDDnYYh4gAK;EtBBGY79cDv.XpvgbSHy43w;EtBBGY79cDv.qEaRHNTa7mi;EtBBGY79cDv.cSY68ZH4wZg;EtBBGY79cDv.Z9N77nA1ZwN;EtBBGY79cDv.F1vIyc2K8oq;EtBBGY79cDv.SKR6BiGmH39;EtBBGY79cDv.K53Thqzzjya;EtBBGY79cDv.XBuwUD1utmH;GebmB0TKmJT.J83ylYGKhbA;GebmB0TKmJT.YFztQ2vR71N;GebmB0TKmJT.pslMIlKFXBh;GebmB0TKmJT.HUIWuBTBq08;GebmB0TKmJT.yHSAPCLxecr;GebmB0TKmJT.Pch5POkRK8D;GebmB0TKmJT.UTolIBbDJGH;GebmB0TKmJT.cJJJCGGLTOi;GebmB0TKmJT.V0L9n6BBxKp;GebmB0TKmJT.VDDnYYh4gAK;GebmB0TKmJT.XpvgbSHy43w;GebmB0TKmJT.qEaRHNTa7mi;GebmB0TKmJT.cSY68ZH4wZg;GebmB0TKmJT.Z9N77nA1ZwN;GebmB0TKmJT.F1vIyc2K8oq;GebmB0TKmJT.SKR6BiGmH39;GebmB0TKmJT.K53Thqzzjya;GebmB0TKmJT.XBuwUD1utmH;s2AtBJcVboI.J83ylYGKhbA;s2AtBJcVboI.YFztQ2vR71N;s2AtBJcVboI.pslMIlKFXBh;s2AtBJcVboI.HUIWuBTBq08;s2AtBJcVboI.yHSAPCLxecr;s2AtBJcVboI.Pch5POkRK8D;s2AtBJcVboI.UTolIBbDJGH;s2AtBJcVboI.cJJJCGGLTOi;s2AtBJcVboI.V0L9n6BBxKp;s2AtBJcVboI.VDDnYYh4gAK;s2AtBJcVboI.XpvgbSHy43w;s2AtBJcVboI.qEaRHNTa7mi;s2AtBJcVboI.cSY68ZH4wZg;s2AtBJcVboI.Z9N77nA1ZwN;s2AtBJcVboI.F1vIyc2K8oq;s2AtBJcVboI.SKR6BiGmH39;s2AtBJcVboI.K53Thqzzjya;s2AtBJcVboI.XBuwUD1utmH;dtISJbwPDx0.J83ylYGKhbA;dtISJbwPDx0.YFztQ2vR71N;dtISJbwPDx0.pslMIlKFXBh;dtISJbwPDx0.HUIWuBTBq08;dtISJbwPDx0.yHSAPCLxecr;dtISJbwPDx0.Pch5POkRK8D;dtISJbwPDx0.UTolIBbDJGH;dtISJbwPDx0.cJJJCGGLTOi;dtISJbwPDx0.V0L9n6BBxKp;dtISJbwPDx0.VDDnYYh4gAK;dtISJbwPDx0.XpvgbSHy43w;dtISJbwPDx0.qEaRHNTa7mi;dtISJbwPDx0.cSY68ZH4wZg;dtISJbwPDx0.Z9N77nA1ZwN;dtISJbwPDx0.F1vIyc2K8oq;dtISJbwPDx0.SKR6BiGmH39;dtISJbwPDx0.K53Thqzzjya;dtISJbwPDx0.XBuwUD1utmH;F9oqcI8uVd7.J83ylYGKhbA;F9oqcI8uVd7.YFztQ2vR71N;F9oqcI8uVd7.pslMIlKFXBh;F9oqcI8uVd7.HUIWuBTBq08;F9oqcI8uVd7.yHSAPCLxecr;F9oqcI8uVd7.Pch5POkRK8D;F9oqcI8uVd7.UTolIBbDJGH;F9oqcI8uVd7.cJJJCGGLTOi;F9oqcI8uVd7.V0L9n6BBxKp;F9oqcI8uVd7.VDDnYYh4gAK;F9oqcI8uVd7.XpvgbSHy43w;F9oqcI8uVd7.qEaRHNTa7mi;F9oqcI8uVd7.cSY68ZH4wZg;F9oqcI8uVd7.Z9N77nA1ZwN;F9oqcI8uVd7.F1vIyc2K8oq;F9oqcI8uVd7.SKR6BiGmH39;F9oqcI8uVd7.K53Thqzzjya;F9oqcI8uVd7.XBuwUD1utmH;Kj97LAJwVHS.J83ylYGKhbA;Kj97LAJwVHS.YFztQ2vR71N;Kj97LAJwVHS.pslMIlKFXBh;Kj97LAJwVHS.HUIWuBTBq08;Kj97LAJwVHS.yHSAPCLxecr;Kj97LAJwVHS.Pch5POkRK8D;Kj97LAJwVHS.UTolIBbDJGH;Kj97LAJwVHS.cJJJCGGLTOi;Kj97LAJwVHS.V0L9n6BBxKp;Kj97LAJwVHS.VDDnYYh4gAK;Kj97LAJwVHS.XpvgbSHy43w;Kj97LAJwVHS.qEaRHNTa7mi;Kj97LAJwVHS.cSY68ZH4wZg;Kj97LAJwVHS.Z9N77nA1ZwN;Kj97LAJwVHS.F1vIyc2K8oq;Kj97LAJwVHS.SKR6BiGmH39;Kj97LAJwVHS.K53Thqzzjya;Kj97LAJwVHS.XBuwUD1utmH;MyyyNqkLH31.J83ylYGKhbA;MyyyNqkLH31.YFztQ2vR71N;MyyyNqkLH31.pslMIlKFXBh;MyyyNqkLH31.HUIWuBTBq08;MyyyNqkLH31.yHSAPCLxecr;MyyyNqkLH31.Pch5POkRK8D;MyyyNqkLH31.UTolIBbDJGH;MyyyNqkLH31.cJJJCGGLTOi;MyyyNqkLH31.V0L9n6BBxKp;MyyyNqkLH31.VDDnYYh4gAK;MyyyNqkLH31.XpvgbSHy43w;MyyyNqkLH31.qEaRHNTa7mi;MyyyNqkLH31.cSY68ZH4wZg;MyyyNqkLH31.Z9N77nA1ZwN;MyyyNqkLH31.F1vIyc2K8oq;MyyyNqkLH31.SKR6BiGmH39;MyyyNqkLH31.K53Thqzzjya;MyyyNqkLH31.XBuwUD1utmH;EKBeCyCTs6N.J83ylYGKhbA;EKBeCyCTs6N.YFztQ2vR71N;EKBeCyCTs6N.pslMIlKFXBh;EKBeCyCTs6N.HUIWuBTBq08;EKBeCyCTs6N.yHSAPCLxecr;EKBeCyCTs6N.Pch5POkRK8D;EKBeCyCTs6N.UTolIBbDJGH;EKBeCyCTs6N.cJJJCGGLTOi;EKBeCyCTs6N.V0L9n6BBxKp;EKBeCyCTs6N.VDDnYYh4gAK;EKBeCyCTs6N.XpvgbSHy43w;EKBeCyCTs6N.qEaRHNTa7mi;EKBeCyCTs6N.cSY68ZH4wZg;EKBeCyCTs6N.Z9N77nA1ZwN;EKBeCyCTs6N.F1vIyc2K8oq;EKBeCyCTs6N.SKR6BiGmH39;EKBeCyCTs6N.K53Thqzzjya;EKBeCyCTs6N.XBuwUD1utmH;cBf5PFB4M3V.J83ylYGKhbA;cBf5PFB4M3V.YFztQ2vR71N;cBf5PFB4M3V.pslMIlKFXBh;cBf5PFB4M3V.HUIWuBTBq08;cBf5PFB4M3V.yHSAPCLxecr;cBf5PFB4M3V.Pch5POkRK8D;cBf5PFB4M3V.UTolIBbDJGH;cBf5PFB4M3V.cJJJCGGLTOi;cBf5PFB4M3V.V0L9n6BBxKp;cBf5PFB4M3V.VDDnYYh4gAK;cBf5PFB4M3V.XpvgbSHy43w;cBf5PFB4M3V.qEaRHNTa7mi;cBf5PFB4M3V.cSY68ZH4wZg;cBf5PFB4M3V.Z9N77nA1ZwN;cBf5PFB4M3V.F1vIyc2K8oq;cBf5PFB4M3V.SKR6BiGmH39;cBf5PFB4M3V.K53Thqzzjya;cBf5PFB4M3V.XBuwUD1utmH;YAZZmQ3cEb5.J83ylYGKhbA;YAZZmQ3cEb5.YFztQ2vR71N;YAZZmQ3cEb5.pslMIlKFXBh;YAZZmQ3cEb5.HUIWuBTBq08;YAZZmQ3cEb5.yHSAPCLxecr;YAZZmQ3cEb5.Pch5POkRK8D;YAZZmQ3cEb5.UTolIBbDJGH;YAZZmQ3cEb5.cJJJCGGLTOi;YAZZmQ3cEb5.V0L9n6BBxKp;YAZZmQ3cEb5.VDDnYYh4gAK;YAZZmQ3cEb5.XpvgbSHy43w;YAZZmQ3cEb5.qEaRHNTa7mi;YAZZmQ3cEb5.cSY68ZH4wZg;YAZZmQ3cEb5.Z9N77nA1ZwN;YAZZmQ3cEb5.F1vIyc2K8oq;YAZZmQ3cEb5.SKR6BiGmH39;YAZZmQ3cEb5.K53Thqzzjya;YAZZmQ3cEb5.XBuwUD1utmH;dcopt8wVXc9.J83ylYGKhbA;dcopt8wVXc9.YFztQ2vR71N;dcopt8wVXc9.pslMIlKFXBh;dcopt8wVXc9.HUIWuBTBq08;dcopt8wVXc9.yHSAPCLxecr;dcopt8wVXc9.Pch5POkRK8D;dcopt8wVXc9.UTolIBbDJGH;dcopt8wVXc9.cJJJCGGLTOi;dcopt8wVXc9.V0L9n6BBxKp;dcopt8wVXc9.VDDnYYh4gAK;dcopt8wVXc9.XpvgbSHy43w;dcopt8wVXc9.qEaRHNTa7mi;dcopt8wVXc9.cSY68ZH4wZg;dcopt8wVXc9.Z9N77nA1ZwN;dcopt8wVXc9.F1vIyc2K8oq;dcopt8wVXc9.SKR6BiGmH39;dcopt8wVXc9.K53Thqzzjya;dcopt8wVXc9.XBuwUD1utmH;UII6zgEqax1.J83ylYGKhbA;UII6zgEqax1.YFztQ2vR71N;UII6zgEqax1.pslMIlKFXBh;UII6zgEqax1.HUIWuBTBq08;UII6zgEqax1.yHSAPCLxecr;UII6zgEqax1.Pch5POkRK8D;UII6zgEqax1.UTolIBbDJGH;UII6zgEqax1.cJJJCGGLTOi;UII6zgEqax1.V0L9n6BBxKp;UII6zgEqax1.VDDnYYh4gAK;UII6zgEqax1.XpvgbSHy43w;UII6zgEqax1.qEaRHNTa7mi;UII6zgEqax1.cSY68ZH4wZg;UII6zgEqax1.Z9N77nA1ZwN;UII6zgEqax1.F1vIyc2K8oq;UII6zgEqax1.SKR6BiGmH39;UII6zgEqax1.K53Thqzzjya;UII6zgEqax1.XBuwUD1utmH;uACPYWLvBiS.J83ylYGKhbA;uACPYWLvBiS.YFztQ2vR71N;uACPYWLvBiS.pslMIlKFXBh;uACPYWLvBiS.HUIWuBTBq08;uACPYWLvBiS.yHSAPCLxecr;uACPYWLvBiS.Pch5POkRK8D;uACPYWLvBiS.UTolIBbDJGH;uACPYWLvBiS.cJJJCGGLTOi;uACPYWLvBiS.V0L9n6BBxKp;uACPYWLvBiS.VDDnYYh4gAK;uACPYWLvBiS.XpvgbSHy43w;uACPYWLvBiS.qEaRHNTa7mi;uACPYWLvBiS.cSY68ZH4wZg;uACPYWLvBiS.Z9N77nA1ZwN;uACPYWLvBiS.F1vIyc2K8oq;uACPYWLvBiS.SKR6BiGmH39;uACPYWLvBiS.K53Thqzzjya;uACPYWLvBiS.XBuwUD1utmH;Gs9BpNaBrXY.J83ylYGKhbA;Gs9BpNaBrXY.YFztQ2vR71N;Gs9BpNaBrXY.pslMIlKFXBh;Gs9BpNaBrXY.HUIWuBTBq08;Gs9BpNaBrXY.yHSAPCLxecr;Gs9BpNaBrXY.Pch5POkRK8D;Gs9BpNaBrXY.UTolIBbDJGH;Gs9BpNaBrXY.cJJJCGGLTOi;Gs9BpNaBrXY.V0L9n6BBxKp;Gs9BpNaBrXY.VDDnYYh4gAK;Gs9BpNaBrXY.XpvgbSHy43w;Gs9BpNaBrXY.qEaRHNTa7mi;Gs9BpNaBrXY.cSY68ZH4wZg;Gs9BpNaBrXY.Z9N77nA1ZwN;Gs9BpNaBrXY.F1vIyc2K8oq;Gs9BpNaBrXY.SKR6BiGmH39;Gs9BpNaBrXY.K53Thqzzjya;Gs9BpNaBrXY.XBuwUD1utmH;SXoo7ANON27.J83ylYGKhbA;SXoo7ANON27.YFztQ2vR71N;SXoo7ANON27.pslMIlKFXBh;SXoo7ANON27.HUIWuBTBq08;SXoo7ANON27.yHSAPCLxecr;SXoo7ANON27.Pch5POkRK8D;SXoo7ANON27.UTolIBbDJGH;SXoo7ANON27.cJJJCGGLTOi;SXoo7ANON27.V0L9n6BBxKp;SXoo7ANON27.VDDnYYh4gAK;SXoo7ANON27.XpvgbSHy43w;SXoo7ANON27.qEaRHNTa7mi;SXoo7ANON27.cSY68ZH4wZg;SXoo7ANON27.Z9N77nA1ZwN;SXoo7ANON27.F1vIyc2K8oq;SXoo7ANON27.SKR6BiGmH39;SXoo7ANON27.K53Thqzzjya;SXoo7ANON27.XBuwUD1utmH;dlEepWvRq4k.J83ylYGKhbA;dlEepWvRq4k.YFztQ2vR71N;dlEepWvRq4k.pslMIlKFXBh;dlEepWvRq4k.HUIWuBTBq08;dlEepWvRq4k.yHSAPCLxecr;dlEepWvRq4k.Pch5POkRK8D;dlEepWvRq4k.UTolIBbDJGH;dlEepWvRq4k.cJJJCGGLTOi;dlEepWvRq4k.V0L9n6BBxKp;dlEepWvRq4k.VDDnYYh4gAK;dlEepWvRq4k.XpvgbSHy43w;dlEepWvRq4k.qEaRHNTa7mi;dlEepWvRq4k.cSY68ZH4wZg;dlEepWvRq4k.Z9N77nA1ZwN;dlEepWvRq4k.F1vIyc2K8oq;dlEepWvRq4k.SKR6BiGmH39;dlEepWvRq4k.K53Thqzzjya;dlEepWvRq4k.XBuwUD1utmH;FZSHapEkYE6.J83ylYGKhbA;FZSHapEkYE6.YFztQ2vR71N;FZSHapEkYE6.pslMIlKFXBh;FZSHapEkYE6.HUIWuBTBq08;FZSHapEkYE6.yHSAPCLxecr;FZSHapEkYE6.Pch5POkRK8D;FZSHapEkYE6.UTolIBbDJGH;FZSHapEkYE6.cJJJCGGLTOi;FZSHapEkYE6.V0L9n6BBxKp;FZSHapEkYE6.VDDnYYh4gAK;FZSHapEkYE6.XpvgbSHy43w;FZSHapEkYE6.qEaRHNTa7mi;FZSHapEkYE6.cSY68ZH4wZg;FZSHapEkYE6.Z9N77nA1ZwN;FZSHapEkYE6.F1vIyc2K8oq;FZSHapEkYE6.SKR6BiGmH39;FZSHapEkYE6.K53Thqzzjya;FZSHapEkYE6.XBuwUD1utmH;&dimension=ou:OU_GROUP-" + $scope.orgId + "&filter=pe:" + $scope.periodId + "&displayProperty=NAME", {
                    format: "json"
                }), // service more than 25
                $.getJSON("../../analytics.json?dimension=dx:pGeBz8X2jRq.J83ylYGKhbA;pGeBz8X2jRq.YFztQ2vR71N;pGeBz8X2jRq.pslMIlKFXBh;pGeBz8X2jRq.HUIWuBTBq08;pGeBz8X2jRq.yHSAPCLxecr;pGeBz8X2jRq.Pch5POkRK8D;pGeBz8X2jRq.UTolIBbDJGH;pGeBz8X2jRq.cJJJCGGLTOi;pGeBz8X2jRq.V0L9n6BBxKp;pGeBz8X2jRq.VDDnYYh4gAK;pGeBz8X2jRq.XpvgbSHy43w;pGeBz8X2jRq.qEaRHNTa7mi;pGeBz8X2jRq.cSY68ZH4wZg;pGeBz8X2jRq.Z9N77nA1ZwN;pGeBz8X2jRq.F1vIyc2K8oq;pGeBz8X2jRq.SKR6BiGmH39;pGeBz8X2jRq.K53Thqzzjya;pGeBz8X2jRq.XBuwUD1utmH;vde3WauuLlB.J83ylYGKhbA;vde3WauuLlB.YFztQ2vR71N;vde3WauuLlB.pslMIlKFXBh;vde3WauuLlB.HUIWuBTBq08;vde3WauuLlB.yHSAPCLxecr;vde3WauuLlB.Pch5POkRK8D;vde3WauuLlB.UTolIBbDJGH;vde3WauuLlB.cJJJCGGLTOi;vde3WauuLlB.V0L9n6BBxKp;vde3WauuLlB.VDDnYYh4gAK;vde3WauuLlB.XpvgbSHy43w;vde3WauuLlB.qEaRHNTa7mi;vde3WauuLlB.cSY68ZH4wZg;vde3WauuLlB.Z9N77nA1ZwN;vde3WauuLlB.F1vIyc2K8oq;vde3WauuLlB.SKR6BiGmH39;vde3WauuLlB.K53Thqzzjya;vde3WauuLlB.XBuwUD1utmH;OBgHxL0dDc6.J83ylYGKhbA;OBgHxL0dDc6.YFztQ2vR71N;OBgHxL0dDc6.pslMIlKFXBh;OBgHxL0dDc6.HUIWuBTBq08;OBgHxL0dDc6.yHSAPCLxecr;OBgHxL0dDc6.Pch5POkRK8D;OBgHxL0dDc6.UTolIBbDJGH;OBgHxL0dDc6.cJJJCGGLTOi;OBgHxL0dDc6.V0L9n6BBxKp;OBgHxL0dDc6.VDDnYYh4gAK;OBgHxL0dDc6.XpvgbSHy43w;OBgHxL0dDc6.qEaRHNTa7mi;OBgHxL0dDc6.cSY68ZH4wZg;OBgHxL0dDc6.Z9N77nA1ZwN;OBgHxL0dDc6.F1vIyc2K8oq;OBgHxL0dDc6.SKR6BiGmH39;OBgHxL0dDc6.K53Thqzzjya;OBgHxL0dDc6.XBuwUD1utmH;yRty32xvXkU.J83ylYGKhbA;yRty32xvXkU.YFztQ2vR71N;yRty32xvXkU.pslMIlKFXBh;yRty32xvXkU.HUIWuBTBq08;yRty32xvXkU.yHSAPCLxecr;yRty32xvXkU.Pch5POkRK8D;yRty32xvXkU.UTolIBbDJGH;yRty32xvXkU.cJJJCGGLTOi;yRty32xvXkU.V0L9n6BBxKp;yRty32xvXkU.VDDnYYh4gAK;yRty32xvXkU.XpvgbSHy43w;yRty32xvXkU.qEaRHNTa7mi;yRty32xvXkU.cSY68ZH4wZg;yRty32xvXkU.Z9N77nA1ZwN;yRty32xvXkU.F1vIyc2K8oq;yRty32xvXkU.SKR6BiGmH39;yRty32xvXkU.K53Thqzzjya;yRty32xvXkU.XBuwUD1utmH;yRty32xvXkU.K53Thqzzjya;yRty32xvXkU.XBuwUD1utmH;OcxH8p4agPL.J83ylYGKhbA;OcxH8p4agPL.YFztQ2vR71N;OcxH8p4agPL.pslMIlKFXBh;OcxH8p4agPL.HUIWuBTBq08;OcxH8p4agPL.yHSAPCLxecr;OcxH8p4agPL.Pch5POkRK8D;OcxH8p4agPL.UTolIBbDJGH;OcxH8p4agPL.cJJJCGGLTOi;OcxH8p4agPL.V0L9n6BBxKp;OcxH8p4agPL.VDDnYYh4gAK;OcxH8p4agPL.XpvgbSHy43w;OcxH8p4agPL.qEaRHNTa7mi;OcxH8p4agPL.cSY68ZH4wZg;OcxH8p4agPL.Z9N77nA1ZwN;OcxH8p4agPL.F1vIyc2K8oq;OcxH8p4agPL.SKR6BiGmH39;OcxH8p4agPL.K53Thqzzjya;OcxH8p4agPL.XBuwUD1utmH;OcxH8p4agPL.K53Thqzzjya;OcxH8p4agPL.XBuwUD1utmH;QKDWB3D3Rfp.J83ylYGKhbA;QKDWB3D3Rfp.YFztQ2vR71N;QKDWB3D3Rfp.pslMIlKFXBh;QKDWB3D3Rfp.HUIWuBTBq08;QKDWB3D3Rfp.yHSAPCLxecr;QKDWB3D3Rfp.Pch5POkRK8D;QKDWB3D3Rfp.UTolIBbDJGH;QKDWB3D3Rfp.cJJJCGGLTOi;QKDWB3D3Rfp.V0L9n6BBxKp;QKDWB3D3Rfp.VDDnYYh4gAK;QKDWB3D3Rfp.XpvgbSHy43w;QKDWB3D3Rfp.qEaRHNTa7mi;QKDWB3D3Rfp.cSY68ZH4wZg;QKDWB3D3Rfp.Z9N77nA1ZwN;QKDWB3D3Rfp.F1vIyc2K8oq;QKDWB3D3Rfp.SKR6BiGmH39;QKDWB3D3Rfp.K53Thqzzjya;QKDWB3D3Rfp.XBuwUD1utmH;pGeBz8X2jRq.J83ylYGKhbA;pGeBz8X2jRq.YFztQ2vR71N;pGeBz8X2jRq.pslMIlKFXBh;pGeBz8X2jRq.HUIWuBTBq08;pGeBz8X2jRq.yHSAPCLxecr;pGeBz8X2jRq.Pch5POkRK8D;pGeBz8X2jRq.UTolIBbDJGH;pGeBz8X2jRq.cJJJCGGLTOi;pGeBz8X2jRq.V0L9n6BBxKp;pGeBz8X2jRq.VDDnYYh4gAK;pGeBz8X2jRq.XpvgbSHy43w;pGeBz8X2jRq.qEaRHNTa7mi;pGeBz8X2jRq.cSY68ZH4wZg;pGeBz8X2jRq.Z9N77nA1ZwN;pGeBz8X2jRq.F1vIyc2K8oq;pGeBz8X2jRq.SKR6BiGmH39;pGeBz8X2jRq.K53Thqzzjya;pGeBz8X2jRq.XBuwUD1utmH;vde3WauuLlB.J83ylYGKhbA;vde3WauuLlB.YFztQ2vR71N;vde3WauuLlB.pslMIlKFXBh;vde3WauuLlB.HUIWuBTBq08;vde3WauuLlB.yHSAPCLxecr;vde3WauuLlB.Pch5POkRK8D;vde3WauuLlB.UTolIBbDJGH;vde3WauuLlB.cJJJCGGLTOi;vde3WauuLlB.V0L9n6BBxKp;vde3WauuLlB.VDDnYYh4gAK;vde3WauuLlB.XpvgbSHy43w;vde3WauuLlB.qEaRHNTa7mi;vde3WauuLlB.cSY68ZH4wZg;vde3WauuLlB.Z9N77nA1ZwN;vde3WauuLlB.F1vIyc2K8oq;vde3WauuLlB.SKR6BiGmH39;vde3WauuLlB.K53Thqzzjya;vde3WauuLlB.XBuwUD1utmH;OBgHxL0dDc6.J83ylYGKhbA;OBgHxL0dDc6.YFztQ2vR71N;OBgHxL0dDc6.pslMIlKFXBh;OBgHxL0dDc6.HUIWuBTBq08;OBgHxL0dDc6.yHSAPCLxecr;OBgHxL0dDc6.Pch5POkRK8D;OBgHxL0dDc6.UTolIBbDJGH;OBgHxL0dDc6.cJJJCGGLTOi;OBgHxL0dDc6.V0L9n6BBxKp;OBgHxL0dDc6.VDDnYYh4gAK;OBgHxL0dDc6.XpvgbSHy43w;OBgHxL0dDc6.qEaRHNTa7mi;OBgHxL0dDc6.cSY68ZH4wZg;OBgHxL0dDc6.Z9N77nA1ZwN;OBgHxL0dDc6.F1vIyc2K8oq;OBgHxL0dDc6.SKR6BiGmH39;OBgHxL0dDc6.K53Thqzzjya;OBgHxL0dDc6.XBuwUD1utmH;sbRu86GdCou.J83ylYGKhbA;sbRu86GdCou.YFztQ2vR71N;sbRu86GdCou.pslMIlKFXBh;sbRu86GdCou.HUIWuBTBq08;sbRu86GdCou.yHSAPCLxecr;sbRu86GdCou.Pch5POkRK8D;sbRu86GdCou.UTolIBbDJGH;sbRu86GdCou.cJJJCGGLTOi;sbRu86GdCou.V0L9n6BBxKp;sbRu86GdCou.VDDnYYh4gAK;sbRu86GdCou.XpvgbSHy43w;sbRu86GdCou.qEaRHNTa7mi;sbRu86GdCou.cSY68ZH4wZg;sbRu86GdCou.Z9N77nA1ZwN;sbRu86GdCou.F1vIyc2K8oq;sbRu86GdCou.SKR6BiGmH39;sbRu86GdCou.K53Thqzzjya;sbRu86GdCou.XBuwUD1utmH;sbRu86GdCou.K53Thqzzjya;sbRu86GdCou.XBuwUD1utmH;Mqz9ktHV2qp.J83ylYGKhbA;Mqz9ktHV2qp.YFztQ2vR71N;Mqz9ktHV2qp.pslMIlKFXBh;Mqz9ktHV2qp.HUIWuBTBq08;Mqz9ktHV2qp.yHSAPCLxecr;Mqz9ktHV2qp.Pch5POkRK8D;Mqz9ktHV2qp.UTolIBbDJGH;Mqz9ktHV2qp.cJJJCGGLTOi;Mqz9ktHV2qp.V0L9n6BBxKp;Mqz9ktHV2qp.VDDnYYh4gAK;Mqz9ktHV2qp.XpvgbSHy43w;Mqz9ktHV2qp.qEaRHNTa7mi;Mqz9ktHV2qp.cSY68ZH4wZg;Mqz9ktHV2qp.Z9N77nA1ZwN;Mqz9ktHV2qp.F1vIyc2K8oq;Mqz9ktHV2qp.SKR6BiGmH39;Mqz9ktHV2qp.K53Thqzzjya;Mqz9ktHV2qp.XBuwUD1utmH;Mqz9ktHV2qp.K53Thqzzjya;Mqz9ktHV2qp.XBuwUD1utmH;ExnwTdbvzga.J83ylYGKhbA;ExnwTdbvzga.YFztQ2vR71N;ExnwTdbvzga.pslMIlKFXBh;ExnwTdbvzga.HUIWuBTBq08;ExnwTdbvzga.yHSAPCLxecr;ExnwTdbvzga.Pch5POkRK8D;ExnwTdbvzga.UTolIBbDJGH;ExnwTdbvzga.cJJJCGGLTOi;ExnwTdbvzga.V0L9n6BBxKp;ExnwTdbvzga.VDDnYYh4gAK;ExnwTdbvzga.XpvgbSHy43w;ExnwTdbvzga.qEaRHNTa7mi;ExnwTdbvzga.cSY68ZH4wZg;ExnwTdbvzga.Z9N77nA1ZwN;ExnwTdbvzga.F1vIyc2K8oq;ExnwTdbvzga.SKR6BiGmH39;ExnwTdbvzga.K53Thqzzjya;ExnwTdbvzga.XBuwUD1utmH;ExnwTdbvzga.K53Thqzzjya;ExnwTdbvzga.XBuwUD1utmH;p5YojCfJtwR.J83ylYGKhbA;p5YojCfJtwR.YFztQ2vR71N;p5YojCfJtwR.pslMIlKFXBh;p5YojCfJtwR.HUIWuBTBq08;p5YojCfJtwR.yHSAPCLxecr;p5YojCfJtwR.Pch5POkRK8D;p5YojCfJtwR.UTolIBbDJGH;p5YojCfJtwR.cJJJCGGLTOi;p5YojCfJtwR.V0L9n6BBxKp;p5YojCfJtwR.VDDnYYh4gAK;p5YojCfJtwR.XpvgbSHy43w;p5YojCfJtwR.qEaRHNTa7mi;p5YojCfJtwR.cSY68ZH4wZg;p5YojCfJtwR.Z9N77nA1ZwN;p5YojCfJtwR.F1vIyc2K8oq;p5YojCfJtwR.SKR6BiGmH39;p5YojCfJtwR.K53Thqzzjya;p5YojCfJtwR.XBuwUD1utmH;p5YojCfJtwR.K53Thqzzjya;p5YojCfJtwR.XBuwUD1utmH;&dimension=ou:OU_GROUP-" + $scope.orgId + "&filter=pe:" + $scope.periodId + "&displayProperty=NAME", {
                    format: "json"
                })
            ).then(function (res4, res5, res6) {
                //count1++;
                $scope.finalvalue(res4, res5, res6, $scope.periodId, $scope.code);
            })

            //  }



        }

        // $scope.redirect = function(){
        //     window.location = "/report.html";
        // }


        $scope.finalvalue = function (res4, res5, res6, periodIds, codes) {


            $scope.pe = periodIds;
            //  document.getElementById('pe').innerHTML = periodIds;
            $scope.co = codes;
            //  document.getElementById('co').innerHTML = codes;

            // -------------------------------  NEW USER MORE THAN 25 ----------------------------------------

            var nmvalue1 = datavalue(res4[0], 'EtBBGY79cDv.J83ylYGKhbA');
            var nmvalue2 = datavalue(res4[0], 'EtBBGY79cDv.YFztQ2vR71N');
            var nmvalue3 = datavalue(res4[0], 'EtBBGY79cDv.pslMIlKFXBh');
            var nmvalue4 = datavalue(res4[0], 'EtBBGY79cDv.HUIWuBTBq08');
            var nmvalue5 = datavalue(res4[0], 'EtBBGY79cDv.yHSAPCLxecr');
            var nmvalue6 = datavalue(res4[0], 'EtBBGY79cDv.Pch5POkRK8D');
            var nmvalue7 = datavalue(res4[0], 'EtBBGY79cDv.UTolIBbDJGH');
            var nmvalue8 = datavalue(res4[0], 'EtBBGY79cDv.cJJJCGGLTOi');
            var nmvalue9 = datavalue(res4[0], 'EtBBGY79cDv.V0L9n6BBxKp');
            var nmvalue10 = datavalue(res4[0], 'EtBBGY79cDv.VDDnYYh4gAK');
            var nmvalue11 = datavalue(res4[0], 'EtBBGY79cDv.XpvgbSHy43w');
            var nmvalue12 = datavalue(res4[0], 'EtBBGY79cDv.qEaRHNTa7mi');
            var nmvalue13 = datavalue(res4[0], 'EtBBGY79cDv.cSY68ZH4wZg');
            var nmvalue14 = datavalue(res4[0], 'EtBBGY79cDv.Z9N77nA1ZwN');
            var nmvalue15 = datavalue(res4[0], 'EtBBGY79cDv.F1vIyc2K8oq');
            var nmvalue16 = datavalue(res4[0], 'EtBBGY79cDv.SKR6BiGmH39');
            var nmvalue17 = datavalue(res4[0], 'EtBBGY79cDv.K53Thqzzjya');
            var nmvalue18 = datavalue(res4[0], 'EtBBGY79cDv.XBuwUD1utmH');
            var nmvalue19 = datavalue(res4[0], 'GebmB0TKmJT.J83ylYGKhbA');
            var nmvalue20 = datavalue(res4[0], 'GebmB0TKmJT.YFztQ2vR71N');
            var nmvalue21 = datavalue(res4[0], 'GebmB0TKmJT.pslMIlKFXBh');
            var nmvalue22 = datavalue(res4[0], 'GebmB0TKmJT.HUIWuBTBq08');
            var nmvalue23 = datavalue(res4[0], 'GebmB0TKmJT.yHSAPCLxecr');
            var nmvalue24 = datavalue(res4[0], 'GebmB0TKmJT.Pch5POkRK8D');
            var nmvalue25 = datavalue(res4[0], 'GebmB0TKmJT.UTolIBbDJGH');
            var nmvalue26 = datavalue(res4[0], 'GebmB0TKmJT.cJJJCGGLTOi');
            var nmvalue27 = datavalue(res4[0], 'GebmB0TKmJT.V0L9n6BBxKp');
            var nmvalue28 = datavalue(res4[0], 'GebmB0TKmJT.VDDnYYh4gAK');
            var nmvalue29 = datavalue(res4[0], 'GebmB0TKmJT.XpvgbSHy43w');
            var nmvalue30 = datavalue(res4[0], 'GebmB0TKmJT.qEaRHNTa7mi');
            var nmvalue31 = datavalue(res4[0], 'GebmB0TKmJT.cSY68ZH4wZg');
            var nmvalue32 = datavalue(res4[0], 'GebmB0TKmJT.Z9N77nA1ZwN');
            var nmvalue33 = datavalue(res4[0], 'GebmB0TKmJT.F1vIyc2K8oq');
            var nmvalue34 = datavalue(res4[0], 'GebmB0TKmJT.SKR6BiGmH39');
            var nmvalue35 = datavalue(res4[0], 'GebmB0TKmJT.K53Thqzzjya');
            var nmvalue36 = datavalue(res4[0], 'GebmB0TKmJT.XBuwUD1utmH');

            var resnmvalue1 = nmvalue1 + nmvalue2 + nmvalue3 + nmvalue4 + nmvalue5 + nmvalue6 + nmvalue7 + nmvalue8 + nmvalue9 + nmvalue10 + nmvalue11 + nmvalue12 + nmvalue13 + nmvalue14 + nmvalue15 + nmvalue16 + nmvalue17 + nmvalue18 + nmvalue19 + nmvalue20 + nmvalue21 + nmvalue22 + nmvalue23 + nmvalue24 + nmvalue25 + nmvalue26 + nmvalue27 + nmvalue28 + nmvalue29 + nmvalue30 + nmvalue31 + nmvalue32 + nmvalue33 + nmvalue34 + nmvalue35 + nmvalue36;

            var nmvalue37 = datavalue(res4[0], 's2AtBJcVboI.J83ylYGKhbA');
            var nmvalue38 = datavalue(res4[0], 's2AtBJcVboI.YFztQ2vR71N');
            var nmvalue39 = datavalue(res4[0], 's2AtBJcVboI.pslMIlKFXBh');
            var nmvalue40 = datavalue(res4[0], 's2AtBJcVboI.HUIWuBTBq08');
            var nmvalue41 = datavalue(res4[0], 's2AtBJcVboI.yHSAPCLxecr');
            var nmvalue42 = datavalue(res4[0], 's2AtBJcVboI.Pch5POkRK8D');
            var nmvalue43 = datavalue(res4[0], 's2AtBJcVboI.UTolIBbDJGH');
            var nmvalue44 = datavalue(res4[0], 's2AtBJcVboI.cJJJCGGLTOi');
            var nmvalue45 = datavalue(res4[0], 's2AtBJcVboI.V0L9n6BBxKp');
            var nmvalue46 = datavalue(res4[0], 's2AtBJcVboI.VDDnYYh4gAK');
            var nmvalue47 = datavalue(res4[0], 's2AtBJcVboI.XpvgbSHy43w');
            var nmvalue48 = datavalue(res4[0], 's2AtBJcVboI.qEaRHNTa7mi');
            var nmvalue49 = datavalue(res4[0], 's2AtBJcVboI.cSY68ZH4wZg');
            var nmvalue50 = datavalue(res4[0], 's2AtBJcVboI.Z9N77nA1ZwN');
            var nmvalue51 = datavalue(res4[0], 's2AtBJcVboI.F1vIyc2K8oq');
            var nmvalue52 = datavalue(res4[0], 's2AtBJcVboI.SKR6BiGmH39');
            var nmvalue53 = datavalue(res4[0], 's2AtBJcVboI.K53Thqzzjya');
            var nmvalue54 = datavalue(res4[0], 's2AtBJcVboI.XBuwUD1utmH');
            var nmvalue55 = datavalue(res4[0], 'dtISJbwPDx0.J83ylYGKhbA');
            var nmvalue56 = datavalue(res4[0], 'dtISJbwPDx0.YFztQ2vR71N');
            var nmvalue57 = datavalue(res4[0], 'dtISJbwPDx0.pslMIlKFXBh');
            var nmvalue58 = datavalue(res4[0], 'dtISJbwPDx0.HUIWuBTBq08');
            var nmvalue59 = datavalue(res4[0], 'dtISJbwPDx0.yHSAPCLxecr');
            var nmvalue60 = datavalue(res4[0], 'dtISJbwPDx0.Pch5POkRK8D');
            var nmvalue61 = datavalue(res4[0], 'dtISJbwPDx0.UTolIBbDJGH');
            var nmvalue62 = datavalue(res4[0], 'dtISJbwPDx0.cJJJCGGLTOi');
            var nmvalue63 = datavalue(res4[0], 'dtISJbwPDx0.V0L9n6BBxKp');
            var nmvalue64 = datavalue(res4[0], 'dtISJbwPDx0.VDDnYYh4gAK');
            var nmvalue65 = datavalue(res4[0], 'dtISJbwPDx0.XpvgbSHy43w');
            var nmvalue66 = datavalue(res4[0], 'dtISJbwPDx0.qEaRHNTa7mi');
            var nmvalue67 = datavalue(res4[0], 'dtISJbwPDx0.cSY68ZH4wZg');
            var nmvalue68 = datavalue(res4[0], 'dtISJbwPDx0.Z9N77nA1ZwN');
            var nmvalue69 = datavalue(res4[0], 'dtISJbwPDx0.F1vIyc2K8oq');
            var nmvalue70 = datavalue(res4[0], 'dtISJbwPDx0.SKR6BiGmH39');
            var nmvalue71 = datavalue(res4[0], 'dtISJbwPDx0.K53Thqzzjya');
            var nmvalue72 = datavalue(res4[0], 'dtISJbwPDx0.XBuwUD1utmH');

            var resnmvalue2 = nmvalue37 + nmvalue38 + nmvalue39 + nmvalue40 + nmvalue41 + nmvalue42 + nmvalue43 + nmvalue44 + nmvalue45 + nmvalue46 + nmvalue47 + nmvalue48 + nmvalue49 + nmvalue50 + nmvalue51 + nmvalue52 + nmvalue53 + nmvalue54 + nmvalue55 + nmvalue56 + nmvalue57 + nmvalue58 + nmvalue59 + nmvalue60 + nmvalue61 + nmvalue62 + nmvalue63 + nmvalue64 + nmvalue65 + nmvalue66 + nmvalue67 + nmvalue68 + nmvalue69 + nmvalue70 + nmvalue71 + nmvalue72;


            var nmvalue73 = datavalue(res4[0], 'F9oqcI8uVd7.J83ylYGKhbA');
            var nmvalue74 = datavalue(res4[0], 'F9oqcI8uVd7.YFztQ2vR71N');
            var nmvalue75 = datavalue(res4[0], 'F9oqcI8uVd7.pslMIlKFXBh');
            var nmvalue76 = datavalue(res4[0], 'F9oqcI8uVd7.HUIWuBTBq08');
            var nmvalue77 = datavalue(res4[0], 'F9oqcI8uVd7.yHSAPCLxecr');
            var nmvalue78 = datavalue(res4[0], 'F9oqcI8uVd7.Pch5POkRK8D');
            var nmvalue79 = datavalue(res4[0], 'F9oqcI8uVd7.UTolIBbDJGH');
            var nmvalue80 = datavalue(res4[0], 'F9oqcI8uVd7.cJJJCGGLTOi');
            var nmvalue81 = datavalue(res4[0], 'F9oqcI8uVd7.V0L9n6BBxKp');
            var nmvalue82 = datavalue(res4[0], 'F9oqcI8uVd7.VDDnYYh4gAK');
            var nmvalue83 = datavalue(res4[0], 'F9oqcI8uVd7.XpvgbSHy43w');
            var nmvalue84 = datavalue(res4[0], 'F9oqcI8uVd7.qEaRHNTa7mi');
            var nmvalue85 = datavalue(res4[0], 'F9oqcI8uVd7.cSY68ZH4wZg');
            var nmvalue86 = datavalue(res4[0], 'F9oqcI8uVd7.Z9N77nA1ZwN');
            var nmvalue87 = datavalue(res4[0], 'F9oqcI8uVd7.F1vIyc2K8oq');
            var nmvalue88 = datavalue(res4[0], 'F9oqcI8uVd7.SKR6BiGmH39');
            var nmvalue89 = datavalue(res4[0], 'F9oqcI8uVd7.K53Thqzzjya');
            var nmvalue90 = datavalue(res4[0], 'F9oqcI8uVd7.XBuwUD1utmH');

            var resnmvalue3 = nmvalue73 + nmvalue74 + nmvalue75 + nmvalue76 + nmvalue77 + nmvalue78 + nmvalue79 + nmvalue80 + nmvalue81 + nmvalue82 + nmvalue83 + nmvalue84 + nmvalue85 + nmvalue86 + nmvalue87 + nmvalue88 + nmvalue89 + nmvalue90;

            var nmvalue91 = datavalue(res4[0], 'Kj97LAJwVHS.J83ylYGKhbA');
            var nmvalue92 = datavalue(res4[0], 'Kj97LAJwVHS.YFztQ2vR71N');
            var nmvalue93 = datavalue(res4[0], 'Kj97LAJwVHS.pslMIlKFXBh');
            var nmvalue94 = datavalue(res4[0], 'Kj97LAJwVHS.HUIWuBTBq08');
            var nmvalue95 = datavalue(res4[0], 'Kj97LAJwVHS.yHSAPCLxecr');
            var nmvalue96 = datavalue(res4[0], 'Kj97LAJwVHS.Pch5POkRK8D');
            var nmvalue97 = datavalue(res4[0], 'Kj97LAJwVHS.UTolIBbDJGH');
            var nmvalue98 = datavalue(res4[0], 'Kj97LAJwVHS.cJJJCGGLTOi');
            var nmvalue99 = datavalue(res4[0], 'Kj97LAJwVHS.V0L9n6BBxKp');
            var nmvalue100 = datavalue(res4[0], 'Kj97LAJwVHS.VDDnYYh4gAK');
            var nmvalue101 = datavalue(res4[0], 'Kj97LAJwVHS.XpvgbSHy43w');
            var nmvalue102 = datavalue(res4[0], 'Kj97LAJwVHS.qEaRHNTa7mi');
            var nmvalue103 = datavalue(res4[0], 'Kj97LAJwVHS.cSY68ZH4wZg');
            var nmvalue104 = datavalue(res4[0], 'Kj97LAJwVHS.Z9N77nA1ZwN');
            var nmvalue105 = datavalue(res4[0], 'Kj97LAJwVHS.F1vIyc2K8oq');
            var nmvalue106 = datavalue(res4[0], 'Kj97LAJwVHS.SKR6BiGmH39');
            var nmvalue107 = datavalue(res4[0], 'Kj97LAJwVHS.K53Thqzzjya');
            var nmvalue108 = datavalue(res4[0], 'Kj97LAJwVHS.XBuwUD1utmH');

            var resnmvalue4 = nmvalue91 + nmvalue92 + nmvalue93 + nmvalue94 + nmvalue95 + nmvalue96 + nmvalue97 + nmvalue98 + nmvalue99 + nmvalue100 + nmvalue101 + nmvalue102 + nmvalue103 + nmvalue104 + nmvalue105 + nmvalue106 + nmvalue107 + nmvalue108;

            var nmvalue109 = datavalue(res4[0], 'MyyyNqkLH31.J83ylYGKhbA');
            var nmvalue110 = datavalue(res4[0], 'MyyyNqkLH31.YFztQ2vR71N');
            var nmvalue111 = datavalue(res4[0], 'MyyyNqkLH31.pslMIlKFXBh');
            var nmvalue112 = datavalue(res4[0], 'MyyyNqkLH31.HUIWuBTBq08');
            var nmvalue113 = datavalue(res4[0], 'MyyyNqkLH31.yHSAPCLxecr');
            var nmvalue114 = datavalue(res4[0], 'MyyyNqkLH31.Pch5POkRK8D');
            var nmvalue115 = datavalue(res4[0], 'MyyyNqkLH31.UTolIBbDJGH');
            var nmvalue116 = datavalue(res4[0], 'MyyyNqkLH31.cJJJCGGLTOi');
            var nmvalue117 = datavalue(res4[0], 'MyyyNqkLH31.V0L9n6BBxKp');
            var nmvalue118 = datavalue(res4[0], 'MyyyNqkLH31.VDDnYYh4gAK');
            var nmvalue119 = datavalue(res4[0], 'MyyyNqkLH31.XpvgbSHy43w');
            var nmvalue120 = datavalue(res4[0], 'MyyyNqkLH31.qEaRHNTa7mi');
            var nmvalue121 = datavalue(res4[0], 'MyyyNqkLH31.cSY68ZH4wZg');
            var nmvalue122 = datavalue(res4[0], 'MyyyNqkLH31.Z9N77nA1ZwN');
            var nmvalue123 = datavalue(res4[0], 'MyyyNqkLH31.F1vIyc2K8oq');
            var nmvalue124 = datavalue(res4[0], 'MyyyNqkLH31.SKR6BiGmH39');
            var nmvalue125 = datavalue(res4[0], 'MyyyNqkLH31.K53Thqzzjya');
            var nmvalue126 = datavalue(res4[0], 'MyyyNqkLH31.XBuwUD1utmH');

            var resnmvalue5 = nmvalue109 + nmvalue110 + nmvalue111 + nmvalue112 + nmvalue113 + nmvalue114 + nmvalue115 + nmvalue116 + nmvalue117 + nmvalue118 + nmvalue119 + nmvalue120 + nmvalue121 + nmvalue122 + nmvalue123 + nmvalue124 + nmvalue125 + nmvalue126;

            var nmvalue127 = datavalue(res4[0], 'EKBeCyCTs6N.J83ylYGKhbA');
            var nmvalue128 = datavalue(res4[0], 'EKBeCyCTs6N.YFztQ2vR71N');
            var nmvalue129 = datavalue(res4[0], 'EKBeCyCTs6N.pslMIlKFXBh');
            var nmvalue130 = datavalue(res4[0], 'EKBeCyCTs6N.HUIWuBTBq08');
            var nmvalue131 = datavalue(res4[0], 'EKBeCyCTs6N.yHSAPCLxecr');
            var nmvalue132 = datavalue(res4[0], 'EKBeCyCTs6N.Pch5POkRK8D');
            var nmvalue133 = datavalue(res4[0], 'EKBeCyCTs6N.UTolIBbDJGH');
            var nmvalue134 = datavalue(res4[0], 'EKBeCyCTs6N.cJJJCGGLTOi');
            var nmvalue135 = datavalue(res4[0], 'EKBeCyCTs6N.V0L9n6BBxKp');
            var nmvalue136 = datavalue(res4[0], 'EKBeCyCTs6N.VDDnYYh4gAK');
            var nmvalue137 = datavalue(res4[0], 'EKBeCyCTs6N.XpvgbSHy43w');
            var nmvalue138 = datavalue(res4[0], 'EKBeCyCTs6N.qEaRHNTa7mi');
            var nmvalue139 = datavalue(res4[0], 'EKBeCyCTs6N.cSY68ZH4wZg');
            var nmvalue140 = datavalue(res4[0], 'EKBeCyCTs6N.Z9N77nA1ZwN');
            var nmvalue141 = datavalue(res4[0], 'EKBeCyCTs6N.F1vIyc2K8oq');
            var nmvalue142 = datavalue(res4[0], 'EKBeCyCTs6N.SKR6BiGmH39');
            var nmvalue143 = datavalue(res4[0], 'EKBeCyCTs6N.K53Thqzzjya');
            var nmvalue144 = datavalue(res4[0], 'EKBeCyCTs6N.XBuwUD1utmH');

            var resnmvalue6 = nmvalue127 + nmvalue128 + nmvalue129 + nmvalue130 + nmvalue131 + nmvalue132 + nmvalue133 + nmvalue134 + nmvalue135 + nmvalue136 + nmvalue137 + nmvalue138 + nmvalue139 + nmvalue140 + nmvalue141 + nmvalue142 + nmvalue143 + nmvalue144;

            var nmvalue145 = datavalue(res4[0], 'cBf5PFB4M3V.J83ylYGKhbA');
            var nmvalue146 = datavalue(res4[0], 'cBf5PFB4M3V.YFztQ2vR71N');
            var nmvalue147 = datavalue(res4[0], 'cBf5PFB4M3V.pslMIlKFXBh');
            var nmvalue148 = datavalue(res4[0], 'cBf5PFB4M3V.HUIWuBTBq08');
            var nmvalue149 = datavalue(res4[0], 'cBf5PFB4M3V.yHSAPCLxecr');
            var nmvalue150 = datavalue(res4[0], 'cBf5PFB4M3V.Pch5POkRK8D');
            var nmvalue151 = datavalue(res4[0], 'cBf5PFB4M3V.UTolIBbDJGH');
            var nmvalue152 = datavalue(res4[0], 'cBf5PFB4M3V.cJJJCGGLTOi');
            var nmvalue153 = datavalue(res4[0], 'cBf5PFB4M3V.V0L9n6BBxKp');
            var nmvalue154 = datavalue(res4[0], 'cBf5PFB4M3V.VDDnYYh4gAK');
            var nmvalue155 = datavalue(res4[0], 'cBf5PFB4M3V.XpvgbSHy43w');
            var nmvalue156 = datavalue(res4[0], 'cBf5PFB4M3V.qEaRHNTa7mi');
            var nmvalue157 = datavalue(res4[0], 'cBf5PFB4M3V.cSY68ZH4wZg');
            var nmvalue158 = datavalue(res4[0], 'cBf5PFB4M3V.Z9N77nA1ZwN');
            var nmvalue159 = datavalue(res4[0], 'cBf5PFB4M3V.F1vIyc2K8oq');
            var nmvalue160 = datavalue(res4[0], 'cBf5PFB4M3V.SKR6BiGmH39');
            var nmvalue161 = datavalue(res4[0], 'cBf5PFB4M3V.K53Thqzzjya');
            var nmvalue162 = datavalue(res4[0], 'cBf5PFB4M3V.XBuwUD1utmH');
            var nmvalue163 = datavalue(res4[0], 'YAZZmQ3cEb5.J83ylYGKhbA');
            var nmvalue164 = datavalue(res4[0], 'YAZZmQ3cEb5.YFztQ2vR71N');
            var nmvalue165 = datavalue(res4[0], 'YAZZmQ3cEb5.pslMIlKFXBh');
            var nmvalue166 = datavalue(res4[0], 'YAZZmQ3cEb5.HUIWuBTBq08');
            var nmvalue167 = datavalue(res4[0], 'YAZZmQ3cEb5.yHSAPCLxecr');
            var nmvalue168 = datavalue(res4[0], 'YAZZmQ3cEb5.Pch5POkRK8D');
            var nmvalue169 = datavalue(res4[0], 'YAZZmQ3cEb5.UTolIBbDJGH');
            var nmvalue170 = datavalue(res4[0], 'YAZZmQ3cEb5.cJJJCGGLTOi');
            var nmvalue171 = datavalue(res4[0], 'YAZZmQ3cEb5.V0L9n6BBxKp');
            var nmvalue172 = datavalue(res4[0], 'YAZZmQ3cEb5.VDDnYYh4gAK');
            var nmvalue173 = datavalue(res4[0], 'YAZZmQ3cEb5.XpvgbSHy43w');
            var nmvalue174 = datavalue(res4[0], 'YAZZmQ3cEb5.qEaRHNTa7mi');
            var nmvalue175 = datavalue(res4[0], 'YAZZmQ3cEb5.cSY68ZH4wZg');
            var nmvalue176 = datavalue(res4[0], 'YAZZmQ3cEb5.Z9N77nA1ZwN');
            var nmvalue177 = datavalue(res4[0], 'YAZZmQ3cEb5.F1vIyc2K8oq');
            var nmvalue178 = datavalue(res4[0], 'YAZZmQ3cEb5.SKR6BiGmH39');
            var nmvalue179 = datavalue(res4[0], 'YAZZmQ3cEb5.K53Thqzzjya');
            var nmvalue180 = datavalue(res4[0], 'YAZZmQ3cEb5.XBuwUD1utmH');
            var nmvalue181 = datavalue(res4[0], 'dcopt8wVXc9.J83ylYGKhbA');
            var nmvalue182 = datavalue(res4[0], 'dcopt8wVXc9.YFztQ2vR71N');
            var nmvalue183 = datavalue(res4[0], 'dcopt8wVXc9.pslMIlKFXBh');
            var nmvalue184 = datavalue(res4[0], 'dcopt8wVXc9.HUIWuBTBq08');
            var nmvalue185 = datavalue(res4[0], 'dcopt8wVXc9.yHSAPCLxecr');
            var nmvalue186 = datavalue(res4[0], 'dcopt8wVXc9.Pch5POkRK8D');
            var nmvalue187 = datavalue(res4[0], 'dcopt8wVXc9.UTolIBbDJGH');
            var nmvalue188 = datavalue(res4[0], 'dcopt8wVXc9.cJJJCGGLTOi');
            var nmvalue189 = datavalue(res4[0], 'dcopt8wVXc9.V0L9n6BBxKp');
            var nmvalue190 = datavalue(res4[0], 'dcopt8wVXc9.VDDnYYh4gAK');
            var nmvalue191 = datavalue(res4[0], 'dcopt8wVXc9.XpvgbSHy43w');
            var nmvalue192 = datavalue(res4[0], 'dcopt8wVXc9.qEaRHNTa7mi');
            var nmvalue193 = datavalue(res4[0], 'dcopt8wVXc9.cSY68ZH4wZg');
            var nmvalue194 = datavalue(res4[0], 'dcopt8wVXc9.Z9N77nA1ZwN');
            var nmvalue195 = datavalue(res4[0], 'dcopt8wVXc9.F1vIyc2K8oq');
            var nmvalue196 = datavalue(res4[0], 'dcopt8wVXc9.SKR6BiGmH39');
            var nmvalue197 = datavalue(res4[0], 'dcopt8wVXc9.K53Thqzzjya');
            var nmvalue198 = datavalue(res4[0], 'dcopt8wVXc9.XBuwUD1utmH');

            var resnmvalue7 = nmvalue145 + nmvalue146 + nmvalue147 + nmvalue148 + nmvalue149 + nmvalue150 + nmvalue151 + nmvalue152 + nmvalue153 + nmvalue154 + nmvalue155 + nmvalue156 + nmvalue157 + nmvalue158 + nmvalue159 + nmvalue160 + nmvalue161 + nmvalue162 + nmvalue163 + nmvalue164 + nmvalue165 + nmvalue166 + nmvalue167 + nmvalue168 + nmvalue169 + nmvalue170 + nmvalue171 + nmvalue172 + nmvalue173 + nmvalue174 + nmvalue175 + nmvalue176 + nmvalue177 + nmvalue178 + nmvalue179 + nmvalue180 + nmvalue181 + nmvalue182 + nmvalue183 + nmvalue184 + nmvalue185 + nmvalue186 + nmvalue187 + nmvalue188 + nmvalue189 + nmvalue190 + nmvalue191 + nmvalue192 + nmvalue193 + nmvalue194 + nmvalue195 + nmvalue196 + nmvalue197 + nmvalue198;

            var nmvalue199 = datavalue(res4[0], 'UII6zgEqax1.J83ylYGKhbA');
            var nmvalue200 = datavalue(res4[0], 'UII6zgEqax1.YFztQ2vR71N');
            var nmvalue201 = datavalue(res4[0], 'UII6zgEqax1.pslMIlKFXBh');
            var nmvalue202 = datavalue(res4[0], 'UII6zgEqax1.HUIWuBTBq08');
            var nmvalue203 = datavalue(res4[0], 'UII6zgEqax1.yHSAPCLxecr');
            var nmvalue204 = datavalue(res4[0], 'UII6zgEqax1.Pch5POkRK8D');
            var nmvalue205 = datavalue(res4[0], 'UII6zgEqax1.UTolIBbDJGH');
            var nmvalue206 = datavalue(res4[0], 'UII6zgEqax1.cJJJCGGLTOi');
            var nmvalue207 = datavalue(res4[0], 'UII6zgEqax1.V0L9n6BBxKp');
            var nmvalue208 = datavalue(res4[0], 'UII6zgEqax1.VDDnYYh4gAK');
            var nmvalue209 = datavalue(res4[0], 'UII6zgEqax1.XpvgbSHy43w');
            var nmvalue210 = datavalue(res4[0], 'UII6zgEqax1.qEaRHNTa7mi');
            var nmvalue211 = datavalue(res4[0], 'UII6zgEqax1.cSY68ZH4wZg');
            var nmvalue212 = datavalue(res4[0], 'UII6zgEqax1.Z9N77nA1ZwN');
            var nmvalue213 = datavalue(res4[0], 'UII6zgEqax1.F1vIyc2K8oq');
            var nmvalue214 = datavalue(res4[0], 'UII6zgEqax1.SKR6BiGmH39');
            var nmvalue215 = datavalue(res4[0], 'UII6zgEqax1.K53Thqzzjya');
            var nmvalue216 = datavalue(res4[0], 'UII6zgEqax1.XBuwUD1utmH');
            var nmvalue217 = datavalue(res4[0], 'uACPYWLvBiS.J83ylYGKhbA');
            var nmvalue218 = datavalue(res4[0], 'uACPYWLvBiS.YFztQ2vR71N');
            var nmvalue219 = datavalue(res4[0], 'uACPYWLvBiS.pslMIlKFXBh');
            var nmvalue220 = datavalue(res4[0], 'uACPYWLvBiS.HUIWuBTBq08');
            var nmvalue221 = datavalue(res4[0], 'uACPYWLvBiS.yHSAPCLxecr');
            var nmvalue222 = datavalue(res4[0], 'uACPYWLvBiS.Pch5POkRK8D');
            var nmvalue223 = datavalue(res4[0], 'uACPYWLvBiS.UTolIBbDJGH');
            var nmvalue224 = datavalue(res4[0], 'uACPYWLvBiS.cJJJCGGLTOi');
            var nmvalue225 = datavalue(res4[0], 'uACPYWLvBiS.V0L9n6BBxKp');
            var nmvalue226 = datavalue(res4[0], 'uACPYWLvBiS.VDDnYYh4gAK');
            var nmvalue227 = datavalue(res4[0], 'uACPYWLvBiS.XpvgbSHy43w');
            var nmvalue228 = datavalue(res4[0], 'uACPYWLvBiS.qEaRHNTa7mi');
            var nmvalue229 = datavalue(res4[0], 'uACPYWLvBiS.cSY68ZH4wZg');
            var nmvalue230 = datavalue(res4[0], 'uACPYWLvBiS.Z9N77nA1ZwN');
            var nmvalue231 = datavalue(res4[0], 'uACPYWLvBiS.F1vIyc2K8oq');
            var nmvalue232 = datavalue(res4[0], 'uACPYWLvBiS.SKR6BiGmH39');
            var nmvalue233 = datavalue(res4[0], 'uACPYWLvBiS.K53Thqzzjya');
            var nmvalue234 = datavalue(res4[0], 'uACPYWLvBiS.XBuwUD1utmH');

            var resnmvalue8 = nmvalue199 + nmvalue200 + nmvalue201 + nmvalue202 + nmvalue203 + nmvalue204 + nmvalue205 + nmvalue206 + nmvalue207 + nmvalue208 + nmvalue209 + nmvalue210 + nmvalue211 + nmvalue212 + nmvalue213 + nmvalue214 + nmvalue215 + nmvalue216 + nmvalue217 + nmvalue218 + nmvalue219 + nmvalue220 + nmvalue221 + nmvalue222 + nmvalue223 + nmvalue224 + nmvalue225 + nmvalue226 + nmvalue227 + nmvalue228 + nmvalue229 + nmvalue230 + nmvalue231 + nmvalue232 + nmvalue233 + nmvalue234;

            var nmvalue235 = datavalue(res4[0], 'Gs9BpNaBrXY.J83ylYGKhbA');
            var nmvalue236 = datavalue(res4[0], 'Gs9BpNaBrXY.YFztQ2vR71N');
            var nmvalue237 = datavalue(res4[0], 'Gs9BpNaBrXY.pslMIlKFXBh');
            var nmvalue238 = datavalue(res4[0], 'Gs9BpNaBrXY.HUIWuBTBq08');
            var nmvalue239 = datavalue(res4[0], 'Gs9BpNaBrXY.yHSAPCLxecr');
            var nmvalue240 = datavalue(res4[0], 'Gs9BpNaBrXY.Pch5POkRK8D');
            var nmvalue241 = datavalue(res4[0], 'Gs9BpNaBrXY.UTolIBbDJGH');
            var nmvalue242 = datavalue(res4[0], 'Gs9BpNaBrXY.cJJJCGGLTOi');
            var nmvalue243 = datavalue(res4[0], 'Gs9BpNaBrXY.V0L9n6BBxKp');
            var nmvalue244 = datavalue(res4[0], 'Gs9BpNaBrXY.VDDnYYh4gAK');
            var nmvalue245 = datavalue(res4[0], 'Gs9BpNaBrXY.XpvgbSHy43w');
            var nmvalue246 = datavalue(res4[0], 'Gs9BpNaBrXY.qEaRHNTa7mi');
            var nmvalue247 = datavalue(res4[0], 'Gs9BpNaBrXY.cSY68ZH4wZg');
            var nmvalue248 = datavalue(res4[0], 'Gs9BpNaBrXY.Z9N77nA1ZwN');
            var nmvalue249 = datavalue(res4[0], 'Gs9BpNaBrXY.F1vIyc2K8oq');
            var nmvalue250 = datavalue(res4[0], 'Gs9BpNaBrXY.SKR6BiGmH39');
            var nmvalue251 = datavalue(res4[0], 'Gs9BpNaBrXY.K53Thqzzjya');
            var nmvalue252 = datavalue(res4[0], 'Gs9BpNaBrXY.XBuwUD1utmH');

            var resnmvalue9 = nmvalue235 + nmvalue236 + nmvalue237 + nmvalue238 + nmvalue239 + nmvalue240 + nmvalue241 + nmvalue242 + nmvalue243 + nmvalue244 + nmvalue245 + nmvalue246 + nmvalue247 + nmvalue248 + nmvalue249 + nmvalue250 + nmvalue251 + nmvalue252;

            var nmvalue253 = datavalue(res4[0], 'SXoo7ANON27.J83ylYGKhbA');
            var nmvalue254 = datavalue(res4[0], 'SXoo7ANON27.YFztQ2vR71N');
            var nmvalue255 = datavalue(res4[0], 'SXoo7ANON27.pslMIlKFXBh');
            var nmvalue256 = datavalue(res4[0], 'SXoo7ANON27.HUIWuBTBq08');
            var nmvalue257 = datavalue(res4[0], 'SXoo7ANON27.yHSAPCLxecr');
            var nmvalue258 = datavalue(res4[0], 'SXoo7ANON27.Pch5POkRK8D');
            var nmvalue259 = datavalue(res4[0], 'SXoo7ANON27.UTolIBbDJGH');
            var nmvalue260 = datavalue(res4[0], 'SXoo7ANON27.cJJJCGGLTOi');
            var nmvalue261 = datavalue(res4[0], 'SXoo7ANON27.V0L9n6BBxKp');
            var nmvalue262 = datavalue(res4[0], 'SXoo7ANON27.VDDnYYh4gAK');
            var nmvalue263 = datavalue(res4[0], 'SXoo7ANON27.XpvgbSHy43w');
            var nmvalue264 = datavalue(res4[0], 'SXoo7ANON27.qEaRHNTa7mi');
            var nmvalue265 = datavalue(res4[0], 'SXoo7ANON27.cSY68ZH4wZg');
            var nmvalue266 = datavalue(res4[0], 'SXoo7ANON27.Z9N77nA1ZwN');
            var nmvalue267 = datavalue(res4[0], 'SXoo7ANON27.F1vIyc2K8oq');
            var nmvalue268 = datavalue(res4[0], 'SXoo7ANON27.SKR6BiGmH39');
            var nmvalue269 = datavalue(res4[0], 'SXoo7ANON27.K53Thqzzjya');
            var nmvalue270 = datavalue(res4[0], 'SXoo7ANON27.XBuwUD1utmH');

            var resnmvalue10 = nmvalue253 + nmvalue254 + nmvalue255 + nmvalue256 + nmvalue257 + nmvalue258 + nmvalue259 + nmvalue260 + nmvalue261 + nmvalue262 + nmvalue263 + nmvalue264 + nmvalue265 + nmvalue266 + nmvalue267 + nmvalue268 + nmvalue269 + nmvalue270;

            var nmvalue271 = datavalue(res4[0], 'dlEepWvRq4k.J83ylYGKhbA');
            var nmvalue272 = datavalue(res4[0], 'dlEepWvRq4k.YFztQ2vR71N');
            var nmvalue273 = datavalue(res4[0], 'dlEepWvRq4k.pslMIlKFXBh');
            var nmvalue274 = datavalue(res4[0], 'dlEepWvRq4k.HUIWuBTBq08');
            var nmvalue275 = datavalue(res4[0], 'dlEepWvRq4k.yHSAPCLxecr');
            var nmvalue276 = datavalue(res4[0], 'dlEepWvRq4k.Pch5POkRK8D');
            var nmvalue277 = datavalue(res4[0], 'dlEepWvRq4k.UTolIBbDJGH');
            var nmvalue278 = datavalue(res4[0], 'dlEepWvRq4k.cJJJCGGLTOi');
            var nmvalue279 = datavalue(res4[0], 'dlEepWvRq4k.V0L9n6BBxKp');
            var nmvalue280 = datavalue(res4[0], 'dlEepWvRq4k.VDDnYYh4gAK');
            var nmvalue281 = datavalue(res4[0], 'dlEepWvRq4k.XpvgbSHy43w');
            var nmvalue282 = datavalue(res4[0], 'dlEepWvRq4k.qEaRHNTa7mi');
            var nmvalue283 = datavalue(res4[0], 'dlEepWvRq4k.cSY68ZH4wZg');
            var nmvalue284 = datavalue(res4[0], 'dlEepWvRq4k.Z9N77nA1ZwN');
            var nmvalue285 = datavalue(res4[0], 'dlEepWvRq4k.F1vIyc2K8oq');
            var nmvalue286 = datavalue(res4[0], 'dlEepWvRq4k.SKR6BiGmH39');
            var nmvalue287 = datavalue(res4[0], 'dlEepWvRq4k.K53Thqzzjya');
            var nmvalue288 = datavalue(res4[0], 'dlEepWvRq4k.XBuwUD1utmH');
            var nmvalue289 = datavalue(res4[0], 'FZSHapEkYE6.J83ylYGKhbA');
            var nmvalue290 = datavalue(res4[0], 'FZSHapEkYE6.YFztQ2vR71N');
            var nmvalue291 = datavalue(res4[0], 'FZSHapEkYE6.pslMIlKFXBh');
            var nmvalue292 = datavalue(res4[0], 'FZSHapEkYE6.HUIWuBTBq08');
            var nmvalue293 = datavalue(res4[0], 'FZSHapEkYE6.yHSAPCLxecr');
            var nmvalue294 = datavalue(res4[0], 'FZSHapEkYE6.Pch5POkRK8D');
            var nmvalue295 = datavalue(res4[0], 'FZSHapEkYE6.UTolIBbDJGH');
            var nmvalue296 = datavalue(res4[0], 'FZSHapEkYE6.cJJJCGGLTOi');
            var nmvalue297 = datavalue(res4[0], 'FZSHapEkYE6.V0L9n6BBxKp');
            var nmvalue298 = datavalue(res4[0], 'FZSHapEkYE6.VDDnYYh4gAK');
            var nmvalue299 = datavalue(res4[0], 'FZSHapEkYE6.XpvgbSHy43w');
            var nmvalue300 = datavalue(res4[0], 'FZSHapEkYE6.qEaRHNTa7mi');
            var nmvalue301 = datavalue(res4[0], 'FZSHapEkYE6.cSY68ZH4wZg');
            var nmvalue302 = datavalue(res4[0], 'FZSHapEkYE6.Z9N77nA1ZwN');
            var nmvalue303 = datavalue(res4[0], 'FZSHapEkYE6.F1vIyc2K8oq');
            var nmvalue304 = datavalue(res4[0], 'FZSHapEkYE6.SKR6BiGmH39');
            var nmvalue305 = datavalue(res4[0], 'FZSHapEkYE6.K53Thqzzjya');
            var nmvalue306 = datavalue(res4[0], 'FZSHapEkYE6.XBuwUD1utmH');

            var resnmvalue11 = nmvalue271 + nmvalue272 + nmvalue273 + nmvalue274 + nmvalue275 + nmvalue276 + nmvalue277 + nmvalue278 + nmvalue279 + nmvalue280 + nmvalue281 + nmvalue282 + nmvalue283 + nmvalue284 + nmvalue285 + nmvalue286 + nmvalue287 + nmvalue288 + nmvalue289 + nmvalue290 + nmvalue291 + nmvalue292 + nmvalue293 + nmvalue294 + nmvalue295 + nmvalue296 + nmvalue297 + nmvalue298 + nmvalue299 + nmvalue300 + nmvalue301 + nmvalue302 + nmvalue303 + nmvalue304 + nmvalue305 + nmvalue306;

            // -------------------------------  NEW USER MORE THAN 25 END----------------------------------------


            // -------------------------------  NEW USER LESS THAN 25 ----------------------------------------
            var nlvalue1 = datavalue(res5[0], 'EtBBGY79cDv.p6WEqYIpk8D');
            var nlvalue2 = datavalue(res5[0], 'EtBBGY79cDv.reZ99TyjNGL');
            var nlvalue3 = datavalue(res5[0], 'EtBBGY79cDv.ulTkuUEFss9');
            var nlvalue4 = datavalue(res5[0], 'EtBBGY79cDv.z1EpsQRz7yK');
            var nlvalue5 = datavalue(res5[0], 'EtBBGY79cDv.doQGmJ8Tkk7');
            var nlvalue6 = datavalue(res5[0], 'EtBBGY79cDv.TiR86Q6O7wp');
            var nlvalue7 = datavalue(res5[0], 'EtBBGY79cDv.xiDmmliOHLM');
            var nlvalue8 = datavalue(res5[0], 'EtBBGY79cDv.rBZZ0oaots2');
            var nlvalue9 = datavalue(res5[0], 'EtBBGY79cDv.NA6h44y8vOG');
            var nlvalue10 = datavalue(res5[0], 'EtBBGY79cDv.UwFCTiNySwX');
            var nlvalue11 = datavalue(res5[0], 'EtBBGY79cDv.p940VFXvJNK');
            var nlvalue12 = datavalue(res5[0], 'EtBBGY79cDv.NHxHNrY5zxr');
            var nlvalue13 = datavalue(res5[0], 'GebmB0TKmJT.p6WEqYIpk8D');
            var nlvalue14 = datavalue(res5[0], 'GebmB0TKmJT.reZ99TyjNGL');
            var nlvalue15 = datavalue(res5[0], 'GebmB0TKmJT.ulTkuUEFss9');
            var nlvalue16 = datavalue(res5[0], 'GebmB0TKmJT.z1EpsQRz7yK');
            var nlvalue17 = datavalue(res5[0], 'GebmB0TKmJT.doQGmJ8Tkk7');
            var nlvalue18 = datavalue(res5[0], 'GebmB0TKmJT.TiR86Q6O7wp');
            var nlvalue19 = datavalue(res5[0], 'GebmB0TKmJT.xiDmmliOHLM');
            var nlvalue20 = datavalue(res5[0], 'GebmB0TKmJT.rBZZ0oaots2');
            var nlvalue21 = datavalue(res5[0], 'GebmB0TKmJT.NA6h44y8vOG');
            var nlvalue22 = datavalue(res5[0], 'GebmB0TKmJT.UwFCTiNySwX');
            var nlvalue23 = datavalue(res5[0], 'GebmB0TKmJT.p940VFXvJNK');
            var nlvalue24 = datavalue(res5[0], 'GebmB0TKmJT.NHxHNrY5zxr');

            var resnlvalue1 = nlvalue1 + nlvalue2 + nlvalue3 + nlvalue4 + nlvalue5 + nlvalue6 + nlvalue7 + nlvalue8 + nlvalue9 + nlvalue10 + nlvalue11 + nlvalue12 + nlvalue13 + nlvalue14 + nlvalue15 + nlvalue16 + nlvalue17 + nlvalue18 + nlvalue19 + nlvalue20 + nlvalue21 + nlvalue22 + nlvalue23 + nlvalue24;

            var nlvalue25 = datavalue(res5[0], 's2AtBJcVboI.p6WEqYIpk8D');
            var nlvalue26 = datavalue(res5[0], 's2AtBJcVboI.reZ99TyjNGL');
            var nlvalue27 = datavalue(res5[0], 's2AtBJcVboI.ulTkuUEFss9');
            var nlvalue28 = datavalue(res5[0], 's2AtBJcVboI.z1EpsQRz7yK');
            var nlvalue29 = datavalue(res5[0], 's2AtBJcVboI.doQGmJ8Tkk7');
            var nlvalue30 = datavalue(res5[0], 's2AtBJcVboI.TiR86Q6O7wp');
            var nlvalue31 = datavalue(res5[0], 's2AtBJcVboI.xiDmmliOHLM');
            var nlvalue32 = datavalue(res5[0], 's2AtBJcVboI.rBZZ0oaots2');
            var nlvalue33 = datavalue(res5[0], 's2AtBJcVboI.NA6h44y8vOG');
            var nlvalue34 = datavalue(res5[0], 's2AtBJcVboI.UwFCTiNySwX');
            var nlvalue35 = datavalue(res5[0], 's2AtBJcVboI.p940VFXvJNK');
            var nlvalue36 = datavalue(res5[0], 's2AtBJcVboI.NHxHNrY5zxr');
            var nlvalue37 = datavalue(res5[0], 'dtISJbwPDx0.p6WEqYIpk8D');
            var nlvalue38 = datavalue(res5[0], 'dtISJbwPDx0.reZ99TyjNGL');
            var nlvalue39 = datavalue(res5[0], 'dtISJbwPDx0.ulTkuUEFss9');
            var nlvalue40 = datavalue(res5[0], 'dtISJbwPDx0.z1EpsQRz7yK');
            var nlvalue41 = datavalue(res5[0], 'dtISJbwPDx0.doQGmJ8Tkk7');
            var nlvalue42 = datavalue(res5[0], 'dtISJbwPDx0.TiR86Q6O7wp');
            var nlvalue43 = datavalue(res5[0], 'dtISJbwPDx0.xiDmmliOHLM');
            var nlvalue44 = datavalue(res5[0], 'dtISJbwPDx0.rBZZ0oaots2');
            var nlvalue45 = datavalue(res5[0], 'dtISJbwPDx0.NA6h44y8vOG');
            var nlvalue46 = datavalue(res5[0], 'dtISJbwPDx0.UwFCTiNySwX');
            var nlvalue47 = datavalue(res5[0], 'dtISJbwPDx0.p940VFXvJNK');
            var nlvalue48 = datavalue(res5[0], 'dtISJbwPDx0.NHxHNrY5zxr');

            var resnlvalue2 = nlvalue25 + nlvalue26 + nlvalue27 + nlvalue28 + nlvalue29 + nlvalue30 + nlvalue31 + nlvalue32 + nlvalue33 + nlvalue34 + nlvalue35 + nlvalue36 + nlvalue37 + nlvalue38 + nlvalue39 + nlvalue40 + nlvalue41 + nlvalue42 + nlvalue43 + nlvalue44 + nlvalue45 + nlvalue46 + nlvalue47 + nlvalue48;

            var nlvalue49 = datavalue(res5[0], 'F9oqcI8uVd7.p6WEqYIpk8D');
            var nlvalue50 = datavalue(res5[0], 'F9oqcI8uVd7.reZ99TyjNGL');
            var nlvalue51 = datavalue(res5[0], 'F9oqcI8uVd7.ulTkuUEFss9');
            var nlvalue52 = datavalue(res5[0], 'F9oqcI8uVd7.z1EpsQRz7yK');
            var nlvalue53 = datavalue(res5[0], 'F9oqcI8uVd7.doQGmJ8Tkk7');
            var nlvalue54 = datavalue(res5[0], 'F9oqcI8uVd7.TiR86Q6O7wp');
            var nlvalue55 = datavalue(res5[0], 'F9oqcI8uVd7.xiDmmliOHLM');
            var nlvalue56 = datavalue(res5[0], 'F9oqcI8uVd7.rBZZ0oaots2');
            var nlvalue57 = datavalue(res5[0], 'F9oqcI8uVd7.NA6h44y8vOG');
            var nlvalue58 = datavalue(res5[0], 'F9oqcI8uVd7.UwFCTiNySwX');
            var nlvalue59 = datavalue(res5[0], 'F9oqcI8uVd7.p940VFXvJNK');
            var nlvalue60 = datavalue(res5[0], 'F9oqcI8uVd7.NHxHNrY5zxr');

            var resnlvalue3 = nlvalue49 + nlvalue50 + nlvalue51 + nlvalue52 + nlvalue53 + nlvalue54 + nlvalue55 + nlvalue56 + nlvalue57 + nlvalue58 + nlvalue59 + nlvalue60;

            var nlvalue61 = datavalue(res5[0], 'Kj97LAJwVHS.p6WEqYIpk8D');
            var nlvalue62 = datavalue(res5[0], 'Kj97LAJwVHS.reZ99TyjNGL');
            var nlvalue63 = datavalue(res5[0], 'Kj97LAJwVHS.ulTkuUEFss9');
            var nlvalue64 = datavalue(res5[0], 'Kj97LAJwVHS.z1EpsQRz7yK');
            var nlvalue65 = datavalue(res5[0], 'Kj97LAJwVHS.doQGmJ8Tkk7');
            var nlvalue66 = datavalue(res5[0], 'Kj97LAJwVHS.TiR86Q6O7wp');
            var nlvalue67 = datavalue(res5[0], 'Kj97LAJwVHS.xiDmmliOHLM');
            var nlvalue68 = datavalue(res5[0], 'Kj97LAJwVHS.rBZZ0oaots2');
            var nlvalue69 = datavalue(res5[0], 'Kj97LAJwVHS.NA6h44y8vOG');
            var nlvalue70 = datavalue(res5[0], 'Kj97LAJwVHS.UwFCTiNySwX');
            var nlvalue71 = datavalue(res5[0], 'Kj97LAJwVHS.p940VFXvJNK');
            var nlvalue72 = datavalue(res5[0], 'Kj97LAJwVHS.NHxHNrY5zxr');

            var resnlvalue4 = nlvalue61 + nlvalue62 + nlvalue63 + nlvalue64 + nlvalue65 + nlvalue66 + nlvalue67 + nlvalue68 + nlvalue69 + nlvalue70 + nlvalue71 + nlvalue72;

            var nlvalue73 = datavalue(res5[0], 'MyyyNqkLH31.p6WEqYIpk8D');
            var nlvalue74 = datavalue(res5[0], 'MyyyNqkLH31.reZ99TyjNGL');
            var nlvalue75 = datavalue(res5[0], 'MyyyNqkLH31.ulTkuUEFss9');
            var nlvalue76 = datavalue(res5[0], 'MyyyNqkLH31.z1EpsQRz7yK');
            var nlvalue77 = datavalue(res5[0], 'MyyyNqkLH31.doQGmJ8Tkk7');
            var nlvalue78 = datavalue(res5[0], 'MyyyNqkLH31.TiR86Q6O7wp');
            var nlvalue79 = datavalue(res5[0], 'MyyyNqkLH31.xiDmmliOHLM');
            var nlvalue80 = datavalue(res5[0], 'MyyyNqkLH31.rBZZ0oaots2');
            var nlvalue81 = datavalue(res5[0], 'MyyyNqkLH31.NA6h44y8vOG');
            var nlvalue82 = datavalue(res5[0], 'MyyyNqkLH31.UwFCTiNySwX');
            var nlvalue83 = datavalue(res5[0], 'MyyyNqkLH31.p940VFXvJNK');
            var nlvalue84 = datavalue(res5[0], 'MyyyNqkLH31.NHxHNrY5zxr');

            var resnlvalue5 = nlvalue73 + nlvalue74 + nlvalue75 + nlvalue76 + nlvalue77 + nlvalue78 + nlvalue79 + nlvalue80 + nlvalue81 + nlvalue82 + nlvalue83 + nlvalue84;

            var nlvalue85 = datavalue(res5[0], 'EKBeCyCTs6N.p6WEqYIpk8D');
            var nlvalue86 = datavalue(res5[0], 'EKBeCyCTs6N.reZ99TyjNGL');
            var nlvalue87 = datavalue(res5[0], 'EKBeCyCTs6N.ulTkuUEFss9');
            var nlvalue88 = datavalue(res5[0], 'EKBeCyCTs6N.z1EpsQRz7yK');
            var nlvalue89 = datavalue(res5[0], 'EKBeCyCTs6N.doQGmJ8Tkk7');
            var nlvalue90 = datavalue(res5[0], 'EKBeCyCTs6N.TiR86Q6O7wp');
            var nlvalue91 = datavalue(res5[0], 'EKBeCyCTs6N.xiDmmliOHLM');
            var nlvalue92 = datavalue(res5[0], 'EKBeCyCTs6N.rBZZ0oaots2');
            var nlvalue93 = datavalue(res5[0], 'EKBeCyCTs6N.NA6h44y8vOG');
            var nlvalue94 = datavalue(res5[0], 'EKBeCyCTs6N.UwFCTiNySwX');
            var nlvalue95 = datavalue(res5[0], 'EKBeCyCTs6N.p940VFXvJNK');
            var nlvalue96 = datavalue(res5[0], 'EKBeCyCTs6N.NHxHNrY5zxr');

            var resnlvalue6 = nlvalue85 + nlvalue86 + nlvalue87 + nlvalue88 + nlvalue89 + nlvalue90 + nlvalue91 + nlvalue92 + nlvalue93 + nlvalue94 + nlvalue95 + nlvalue96;

            var nlvalue97 = datavalue(res5[0], 'cBf5PFB4M3V.p6WEqYIpk8D');
            var nlvalue98 = datavalue(res5[0], 'cBf5PFB4M3V.reZ99TyjNGL');
            var nlvalue99 = datavalue(res5[0], 'cBf5PFB4M3V.ulTkuUEFss9');
            var nlvalue100 = datavalue(res5[0], 'cBf5PFB4M3V.z1EpsQRz7yK');
            var nlvalue101 = datavalue(res5[0], 'cBf5PFB4M3V.doQGmJ8Tkk7');
            var nlvalue102 = datavalue(res5[0], 'cBf5PFB4M3V.TiR86Q6O7wp');
            var nlvalue103 = datavalue(res5[0], 'cBf5PFB4M3V.xiDmmliOHLM');
            var nlvalue104 = datavalue(res5[0], 'cBf5PFB4M3V.rBZZ0oaots2');
            var nlvalue105 = datavalue(res5[0], 'cBf5PFB4M3V.NA6h44y8vOG');
            var nlvalue106 = datavalue(res5[0], 'cBf5PFB4M3V.UwFCTiNySwX');
            var nlvalue107 = datavalue(res5[0], 'cBf5PFB4M3V.p940VFXvJNK');
            var nlvalue108 = datavalue(res5[0], 'cBf5PFB4M3V.NHxHNrY5zxr');
            var nlvalue109 = datavalue(res5[0], 'YAZZmQ3cEb5.p6WEqYIpk8D');
            var nlvalue110 = datavalue(res5[0], 'YAZZmQ3cEb5.reZ99TyjNGL');
            var nlvalue111 = datavalue(res5[0], 'YAZZmQ3cEb5.ulTkuUEFss9');
            var nlvalue112 = datavalue(res5[0], 'YAZZmQ3cEb5.z1EpsQRz7yK');
            var nlvalue113 = datavalue(res5[0], 'YAZZmQ3cEb5.doQGmJ8Tkk7');
            var nlvalue114 = datavalue(res5[0], 'YAZZmQ3cEb5.TiR86Q6O7wp');
            var nlvalue115 = datavalue(res5[0], 'YAZZmQ3cEb5.xiDmmliOHLM');
            var nlvalue116 = datavalue(res5[0], 'YAZZmQ3cEb5.rBZZ0oaots2');
            var nlvalue117 = datavalue(res5[0], 'YAZZmQ3cEb5.NA6h44y8vOG');
            var nlvalue118 = datavalue(res5[0], 'YAZZmQ3cEb5.UwFCTiNySwX');
            var nlvalue119 = datavalue(res5[0], 'YAZZmQ3cEb5.p940VFXvJNK');
            var nlvalue120 = datavalue(res5[0], 'YAZZmQ3cEb5.NHxHNrY5zxr');
            var nlvalue121 = datavalue(res5[0], 'dcopt8wVXc9.p6WEqYIpk8D');
            var nlvalue122 = datavalue(res5[0], 'dcopt8wVXc9.reZ99TyjNGL');
            var nlvalue123 = datavalue(res5[0], 'dcopt8wVXc9.ulTkuUEFss9');
            var nlvalue124 = datavalue(res5[0], 'dcopt8wVXc9.z1EpsQRz7yK');
            var nlvalue125 = datavalue(res5[0], 'dcopt8wVXc9.doQGmJ8Tkk7');
            var nlvalue126 = datavalue(res5[0], 'dcopt8wVXc9.TiR86Q6O7wp');
            var nlvalue127 = datavalue(res5[0], 'dcopt8wVXc9.xiDmmliOHLM');
            var nlvalue128 = datavalue(res5[0], 'dcopt8wVXc9.rBZZ0oaots2');
            var nlvalue129 = datavalue(res5[0], 'dcopt8wVXc9.NA6h44y8vOG');
            var nlvalue130 = datavalue(res5[0], 'dcopt8wVXc9.UwFCTiNySwX');
            var nlvalue131 = datavalue(res5[0], 'dcopt8wVXc9.p940VFXvJNK');
            var nlvalue132 = datavalue(res5[0], 'dcopt8wVXc9.NHxHNrY5zxr');

            var resnlvalue7 = nlvalue97 + nlvalue98 + nlvalue99 + nlvalue100 + nlvalue101 + nlvalue102 + nlvalue103 + nlvalue104 + nlvalue105 + nlvalue106 + nlvalue107 + nlvalue108 + nlvalue109 + nlvalue110 + nlvalue111 + nlvalue112 + nlvalue113 + nlvalue114 + nlvalue115 + nlvalue116 + nlvalue117 + nlvalue118 + nlvalue119 + nlvalue120 + nlvalue121 + nlvalue122 + nlvalue123 + nlvalue124 + nlvalue125 + nlvalue126 + nlvalue127 + nlvalue128 + nlvalue129 + nlvalue130 + nlvalue131 + nlvalue132;

            var nlvalue133 = datavalue(res5[0], 'UII6zgEqax1.p6WEqYIpk8D');
            var nlvalue134 = datavalue(res5[0], 'UII6zgEqax1.reZ99TyjNGL');
            var nlvalue135 = datavalue(res5[0], 'UII6zgEqax1.ulTkuUEFss9');
            var nlvalue136 = datavalue(res5[0], 'UII6zgEqax1.z1EpsQRz7yK');
            var nlvalue137 = datavalue(res5[0], 'UII6zgEqax1.doQGmJ8Tkk7');
            var nlvalue138 = datavalue(res5[0], 'UII6zgEqax1.TiR86Q6O7wp');
            var nlvalue139 = datavalue(res5[0], 'UII6zgEqax1.xiDmmliOHLM');
            var nlvalue140 = datavalue(res5[0], 'UII6zgEqax1.rBZZ0oaots2');
            var nlvalue141 = datavalue(res5[0], 'UII6zgEqax1.NA6h44y8vOG');
            var nlvalue142 = datavalue(res5[0], 'UII6zgEqax1.UwFCTiNySwX');
            var nlvalue143 = datavalue(res5[0], 'UII6zgEqax1.p940VFXvJNK');
            var nlvalue144 = datavalue(res5[0], 'UII6zgEqax1.NHxHNrY5zxr');
            var nlvalue145 = datavalue(res5[0], 'uACPYWLvBiS.p6WEqYIpk8D');
            var nlvalue146 = datavalue(res5[0], 'uACPYWLvBiS.reZ99TyjNGL');
            var nlvalue147 = datavalue(res5[0], 'uACPYWLvBiS.ulTkuUEFss9');
            var nlvalue148 = datavalue(res5[0], 'uACPYWLvBiS.z1EpsQRz7yK');
            var nlvalue149 = datavalue(res5[0], 'uACPYWLvBiS.doQGmJ8Tkk7');
            var nlvalue150 = datavalue(res5[0], 'uACPYWLvBiS.TiR86Q6O7wp');
            var nlvalue151 = datavalue(res5[0], 'uACPYWLvBiS.xiDmmliOHLM');
            var nlvalue152 = datavalue(res5[0], 'uACPYWLvBiS.rBZZ0oaots2');
            var nlvalue153 = datavalue(res5[0], 'uACPYWLvBiS.NA6h44y8vOG');
            var nlvalue154 = datavalue(res5[0], 'uACPYWLvBiS.UwFCTiNySwX');
            var nlvalue155 = datavalue(res5[0], 'uACPYWLvBiS.p940VFXvJNK');
            var nlvalue156 = datavalue(res5[0], 'uACPYWLvBiS.NHxHNrY5zxr');

            var resnlvalue8 = nlvalue133 + nlvalue134 + nlvalue135 + nlvalue136 + nlvalue137 + nlvalue138 + nlvalue139 + nlvalue140 + nlvalue141 + nlvalue142 + nlvalue143 + nlvalue144 + nlvalue145 + nlvalue146 + nlvalue147 + nlvalue148 + nlvalue149 + nlvalue150 + nlvalue151 + nlvalue152 + nlvalue153 + nlvalue154 + nlvalue155 + nlvalue156;

            var nlvalue157 = datavalue(res5[0], 'Gs9BpNaBrXY.p6WEqYIpk8D');
            var nlvalue158 = datavalue(res5[0], 'Gs9BpNaBrXY.reZ99TyjNGL');
            var nlvalue159 = datavalue(res5[0], 'Gs9BpNaBrXY.ulTkuUEFss9');
            var nlvalue160 = datavalue(res5[0], 'Gs9BpNaBrXY.z1EpsQRz7yK');
            var nlvalue161 = datavalue(res5[0], 'Gs9BpNaBrXY.doQGmJ8Tkk7');
            var nlvalue162 = datavalue(res5[0], 'Gs9BpNaBrXY.TiR86Q6O7wp');
            var nlvalue163 = datavalue(res5[0], 'Gs9BpNaBrXY.xiDmmliOHLM');
            var nlvalue164 = datavalue(res5[0], 'Gs9BpNaBrXY.rBZZ0oaots2');
            var nlvalue165 = datavalue(res5[0], 'Gs9BpNaBrXY.NA6h44y8vOG');
            var nlvalue166 = datavalue(res5[0], 'Gs9BpNaBrXY.UwFCTiNySwX');
            var nlvalue167 = datavalue(res5[0], 'Gs9BpNaBrXY.p940VFXvJNK');
            var nlvalue168 = datavalue(res5[0], 'Gs9BpNaBrXY.NHxHNrY5zxr');

            var resnlvalue9 = nlvalue157 + nlvalue158 + nlvalue159 + nlvalue160 + nlvalue161 + nlvalue162 + nlvalue163 + nlvalue164 + nlvalue165 + nlvalue166 + nlvalue167 + nlvalue168;

            var nlvalue169 = datavalue(res5[0], 'SXoo7ANON27.p6WEqYIpk8D');
            var nlvalue170 = datavalue(res5[0], 'SXoo7ANON27.reZ99TyjNGL');
            var nlvalue171 = datavalue(res5[0], 'SXoo7ANON27.ulTkuUEFss9');
            var nlvalue172 = datavalue(res5[0], 'SXoo7ANON27.z1EpsQRz7yK');
            var nlvalue173 = datavalue(res5[0], 'SXoo7ANON27.doQGmJ8Tkk7');
            var nlvalue174 = datavalue(res5[0], 'SXoo7ANON27.TiR86Q6O7wp');
            var nlvalue175 = datavalue(res5[0], 'SXoo7ANON27.xiDmmliOHLM');
            var nlvalue176 = datavalue(res5[0], 'SXoo7ANON27.rBZZ0oaots2');
            var nlvalue177 = datavalue(res5[0], 'SXoo7ANON27.NA6h44y8vOG');
            var nlvalue178 = datavalue(res5[0], 'SXoo7ANON27.UwFCTiNySwX');
            var nlvalue179 = datavalue(res5[0], 'SXoo7ANON27.p940VFXvJNK');
            var nlvalue180 = datavalue(res5[0], 'SXoo7ANON27.NHxHNrY5zxr');

            var resnlvalue10 = nlvalue169 + nlvalue170 + nlvalue171 + nlvalue172 + nlvalue173 + nlvalue174 + nlvalue175 + nlvalue176 + nlvalue177 + nlvalue178 + nlvalue179 + nlvalue180;

            var nlvalue181 = datavalue(res5[0], 'dlEepWvRq4k.p6WEqYIpk8D');
            var nlvalue182 = datavalue(res5[0], 'dlEepWvRq4k.reZ99TyjNGL');
            var nlvalue183 = datavalue(res5[0], 'dlEepWvRq4k.ulTkuUEFss9');
            var nlvalue184 = datavalue(res5[0], 'dlEepWvRq4k.z1EpsQRz7yK');
            var nlvalue185 = datavalue(res5[0], 'dlEepWvRq4k.doQGmJ8Tkk7');
            var nlvalue186 = datavalue(res5[0], 'dlEepWvRq4k.TiR86Q6O7wp');
            var nlvalue187 = datavalue(res5[0], 'dlEepWvRq4k.xiDmmliOHLM');
            var nlvalue188 = datavalue(res5[0], 'dlEepWvRq4k.rBZZ0oaots2');
            var nlvalue189 = datavalue(res5[0], 'dlEepWvRq4k.NA6h44y8vOG');
            var nlvalue190 = datavalue(res5[0], 'dlEepWvRq4k.UwFCTiNySwX');
            var nlvalue191 = datavalue(res5[0], 'dlEepWvRq4k.p940VFXvJNK');
            var nlvalue192 = datavalue(res5[0], 'dlEepWvRq4k.NHxHNrY5zxr');
            var nlvalue193 = datavalue(res5[0], 'FZSHapEkYE6.p6WEqYIpk8D');
            var nlvalue194 = datavalue(res5[0], 'FZSHapEkYE6.reZ99TyjNGL');
            var nlvalue195 = datavalue(res5[0], 'FZSHapEkYE6.ulTkuUEFss9');
            var nlvalue196 = datavalue(res5[0], 'FZSHapEkYE6.z1EpsQRz7yK');
            var nlvalue197 = datavalue(res5[0], 'FZSHapEkYE6.doQGmJ8Tkk7');
            var nlvalue198 = datavalue(res5[0], 'FZSHapEkYE6.TiR86Q6O7wp');
            var nlvalue199 = datavalue(res5[0], 'FZSHapEkYE6.xiDmmliOHLM');
            var nlvalue200 = datavalue(res5[0], 'FZSHapEkYE6.rBZZ0oaots2');
            var nlvalue201 = datavalue(res5[0], 'FZSHapEkYE6.NA6h44y8vOG');
            var nlvalue202 = datavalue(res5[0], 'FZSHapEkYE6.UwFCTiNySwX');
            var nlvalue203 = datavalue(res5[0], 'FZSHapEkYE6.p940VFXvJNK');
            var nlvalue204 = datavalue(res5[0], 'FZSHapEkYE6.NHxHNrY5zxr');

            var resnlvalue11 = nlvalue181 + nlvalue182 + nlvalue183 + nlvalue184 + nlvalue185 + nlvalue186 + nlvalue187 + nlvalue188 + nlvalue189 + nlvalue190 + nlvalue191 + nlvalue192 + nlvalue193 + nlvalue194 + nlvalue195 + nlvalue196 + nlvalue197 + nlvalue198 + nlvalue199 + nlvalue200 + nlvalue201 + nlvalue202 + nlvalue203 + nlvalue204;



            // -------------------------------  NEW USER LESS THAN 25 END----------------------------------------


            // -------------------------------  SERVICE MORE THAN 25 ----------------------------------------

            var smvalue1 = datavalue(res6[0], 'pGeBz8X2jRq.J83ylYGKhbA');
            var smvalue2 = datavalue(res6[0], 'pGeBz8X2jRq.YFztQ2vR71N');
            var smvalue3 = datavalue(res6[0], 'pGeBz8X2jRq.pslMIlKFXBh');
            var smvalue4 = datavalue(res6[0], 'pGeBz8X2jRq.HUIWuBTBq08');
            var smvalue5 = datavalue(res6[0], 'pGeBz8X2jRq.yHSAPCLxecr');
            var smvalue6 = datavalue(res6[0], 'pGeBz8X2jRq.Pch5POkRK8D');
            var smvalue7 = datavalue(res6[0], 'pGeBz8X2jRq.UTolIBbDJGH');
            var smvalue8 = datavalue(res6[0], 'pGeBz8X2jRq.cJJJCGGLTOi');
            var smvalue9 = datavalue(res6[0], 'pGeBz8X2jRq.V0L9n6BBxKp');
            var smvalue10 = datavalue(res6[0], 'pGeBz8X2jRq.VDDnYYh4gAK');
            var smvalue11 = datavalue(res6[0], 'pGeBz8X2jRq.XpvgbSHy43w');
            var smvalue12 = datavalue(res6[0], 'pGeBz8X2jRq.qEaRHNTa7mi');
            var smvalue13 = datavalue(res6[0], 'pGeBz8X2jRq.cSY68ZH4wZg');
            var smvalue14 = datavalue(res6[0], 'pGeBz8X2jRq.Z9N77nA1ZwN');
            var smvalue15 = datavalue(res6[0], 'pGeBz8X2jRq.F1vIyc2K8oq');
            var smvalue16 = datavalue(res6[0], 'pGeBz8X2jRq.SKR6BiGmH39');
            var smvalue17 = datavalue(res6[0], 'pGeBz8X2jRq.K53Thqzzjya');
            var smvalue18 = datavalue(res6[0], 'pGeBz8X2jRq.XBuwUD1utmH');
            var smvalue19 = datavalue(res6[0], 'vde3WauuLlB.J83ylYGKhbA');
            var smvalue20 = datavalue(res6[0], 'vde3WauuLlB.YFztQ2vR71N');
            var smvalue21 = datavalue(res6[0], 'vde3WauuLlB.pslMIlKFXBh');
            var smvalue22 = datavalue(res6[0], 'vde3WauuLlB.HUIWuBTBq08');
            var smvalue23 = datavalue(res6[0], 'vde3WauuLlB.yHSAPCLxecr');
            var smvalue24 = datavalue(res6[0], 'vde3WauuLlB.Pch5POkRK8D');
            var smvalue25 = datavalue(res6[0], 'vde3WauuLlB.UTolIBbDJGH');
            var smvalue26 = datavalue(res6[0], 'vde3WauuLlB.cJJJCGGLTOi');
            var smvalue27 = datavalue(res6[0], 'vde3WauuLlB.V0L9n6BBxKp');
            var smvalue28 = datavalue(res6[0], 'vde3WauuLlB.VDDnYYh4gAK');
            var smvalue29 = datavalue(res6[0], 'vde3WauuLlB.XpvgbSHy43w');
            var smvalue30 = datavalue(res6[0], 'vde3WauuLlB.qEaRHNTa7mi');
            var smvalue31 = datavalue(res6[0], 'vde3WauuLlB.cSY68ZH4wZg');
            var smvalue32 = datavalue(res6[0], 'vde3WauuLlB.Z9N77nA1ZwN');
            var smvalue33 = datavalue(res6[0], 'vde3WauuLlB.F1vIyc2K8oq');
            var smvalue34 = datavalue(res6[0], 'vde3WauuLlB.SKR6BiGmH39');
            var smvalue35 = datavalue(res6[0], 'vde3WauuLlB.K53Thqzzjya');
            var smvalue36 = datavalue(res6[0], 'vde3WauuLlB.XBuwUD1utmH');
            var smvalue37 = datavalue(res6[0], 'OBgHxL0dDc6.J83ylYGKhbA');
            var smvalue38 = datavalue(res6[0], 'OBgHxL0dDc6.YFztQ2vR71N');
            var smvalue39 = datavalue(res6[0], 'OBgHxL0dDc6.pslMIlKFXBh');
            var smvalue40 = datavalue(res6[0], 'OBgHxL0dDc6.HUIWuBTBq08');
            var smvalue41 = datavalue(res6[0], 'OBgHxL0dDc6.yHSAPCLxecr');
            var smvalue42 = datavalue(res6[0], 'OBgHxL0dDc6.Pch5POkRK8D');
            var smvalue43 = datavalue(res6[0], 'OBgHxL0dDc6.UTolIBbDJGH');
            var smvalue44 = datavalue(res6[0], 'OBgHxL0dDc6.cJJJCGGLTOi');
            var smvalue45 = datavalue(res6[0], 'OBgHxL0dDc6.V0L9n6BBxKp');
            var smvalue46 = datavalue(res6[0], 'OBgHxL0dDc6.VDDnYYh4gAK');
            var smvalue47 = datavalue(res6[0], 'OBgHxL0dDc6.XpvgbSHy43w');
            var smvalue48 = datavalue(res6[0], 'OBgHxL0dDc6.qEaRHNTa7mi');
            var smvalue49 = datavalue(res6[0], 'OBgHxL0dDc6.cSY68ZH4wZg');
            var smvalue50 = datavalue(res6[0], 'OBgHxL0dDc6.Z9N77nA1ZwN');
            var smvalue51 = datavalue(res6[0], 'OBgHxL0dDc6.F1vIyc2K8oq');
            var smvalue52 = datavalue(res6[0], 'OBgHxL0dDc6.SKR6BiGmH39');
            var smvalue53 = datavalue(res6[0], 'OBgHxL0dDc6.K53Thqzzjya');
            var smvalue54 = datavalue(res6[0], 'OBgHxL0dDc6.XBuwUD1utmH');


            var ressmvalue1 = smvalue1 +smvalue2 +smvalue3 +smvalue4 +smvalue5 +smvalue6 +smvalue7 +smvalue8 +smvalue9 +smvalue10 +smvalue11 +smvalue12 +smvalue13 +smvalue14 +smvalue15 +smvalue16 +smvalue17 +smvalue18 +smvalue19 +smvalue20 +smvalue21 +smvalue22 +smvalue23 +smvalue24 +smvalue25 +smvalue26 +smvalue27 +smvalue28+smvalue29 +smvalue30 +smvalue31 +smvalue32 +smvalue33 +smvalue34 +smvalue35 +smvalue36 +smvalue37 +smvalue38 +smvalue39 +smvalue40 +smvalue41 +smvalue42 +smvalue43 +smvalue44 +smvalue45 +smvalue46 +smvalue47 +smvalue48 +smvalue49 +smvalue50 +smvalue51 +smvalue52 +smvalue53 +smvalue54;


var smvalue55= datavalue(res6[0],'yRty32xvXkU.J83ylYGKhbA');
var smvalue56= datavalue(res6[0],'yRty32xvXkU.YFztQ2vR71N');
var smvalue57= datavalue(res6[0],'yRty32xvXkU.pslMIlKFXBh');
var smvalue58= datavalue(res6[0],'yRty32xvXkU.HUIWuBTBq08');
var smvalue59= datavalue(res6[0],'yRty32xvXkU.yHSAPCLxecr');
var smvalue60= datavalue(res6[0],'yRty32xvXkU.Pch5POkRK8D');
var smvalue61= datavalue(res6[0],'yRty32xvXkU.UTolIBbDJGH');
var smvalue62= datavalue(res6[0],'yRty32xvXkU.cJJJCGGLTOi');
var smvalue63= datavalue(res6[0],'yRty32xvXkU.V0L9n6BBxKp');
var smvalue64= datavalue(res6[0],'yRty32xvXkU.VDDnYYh4gAK');
var smvalue65= datavalue(res6[0],'yRty32xvXkU.XpvgbSHy43w');
var smvalue66= datavalue(res6[0],'yRty32xvXkU.qEaRHNTa7mi');
var smvalue67= datavalue(res6[0],'yRty32xvXkU.cSY68ZH4wZg');
var smvalue68= datavalue(res6[0],'yRty32xvXkU.Z9N77nA1ZwN');
var smvalue69= datavalue(res6[0],'yRty32xvXkU.F1vIyc2K8oq');
var smvalue70= datavalue(res6[0],'yRty32xvXkU.SKR6BiGmH39');
var smvalue71= datavalue(res6[0],'yRty32xvXkU.K53Thqzzjya');
var smvalue72= datavalue(res6[0],'yRty32xvXkU.XBuwUD1utmH');
var smvalue73= datavalue(res6[0],'yRty32xvXkU.K53Thqzzjya');
var smvalue74= datavalue(res6[0],'yRty32xvXkU.XBuwUD1utmH');
var smvalue75= datavalue(res6[0],'OcxH8p4agPL.J83ylYGKhbA');
var smvalue76= datavalue(res6[0],'OcxH8p4agPL.YFztQ2vR71N');
var smvalue77= datavalue(res6[0],'OcxH8p4agPL.pslMIlKFXBh');
var smvalue78= datavalue(res6[0],'OcxH8p4agPL.HUIWuBTBq08');
var smvalue79= datavalue(res6[0],'OcxH8p4agPL.yHSAPCLxecr');
var smvalue80= datavalue(res6[0],'OcxH8p4agPL.Pch5POkRK8D');
var smvalue81= datavalue(res6[0],'OcxH8p4agPL.UTolIBbDJGH');
var smvalue82= datavalue(res6[0],'OcxH8p4agPL.cJJJCGGLTOi');
var smvalue83= datavalue(res6[0],'OcxH8p4agPL.V0L9n6BBxKp');
var smvalue84= datavalue(res6[0],'OcxH8p4agPL.VDDnYYh4gAK');
var smvalue85= datavalue(res6[0],'OcxH8p4agPL.XpvgbSHy43w');
var smvalue86= datavalue(res6[0],'OcxH8p4agPL.qEaRHNTa7mi');
var smvalue87= datavalue(res6[0],'OcxH8p4agPL.cSY68ZH4wZg');
var smvalue88= datavalue(res6[0],'OcxH8p4agPL.Z9N77nA1ZwN');
var smvalue89= datavalue(res6[0],'OcxH8p4agPL.F1vIyc2K8oq');
var smvalue90= datavalue(res6[0],'OcxH8p4agPL.SKR6BiGmH39');
var smvalue91= datavalue(res6[0],'OcxH8p4agPL.K53Thqzzjya');
var smvalue92= datavalue(res6[0],'OcxH8p4agPL.XBuwUD1utmH');
var smvalue93= datavalue(res6[0],'OcxH8p4agPL.K53Thqzzjya');
var smvalue94= datavalue(res6[0],'OcxH8p4agPL.XBuwUD1utmH');
var smvalue95= datavalue(res6[0],'QKDWB3D3Rfp.J83ylYGKhbA');
var smvalue96= datavalue(res6[0],'QKDWB3D3Rfp.YFztQ2vR71N');
var smvalue97= datavalue(res6[0],'QKDWB3D3Rfp.pslMIlKFXBh');
var smvalue98= datavalue(res6[0],'QKDWB3D3Rfp.HUIWuBTBq08');
var smvalue99= datavalue(res6[0],'QKDWB3D3Rfp.yHSAPCLxecr');
var smvalue100= datavalue(res6[0],'QKDWB3D3Rfp.Pch5POkRK8D');
var smvalue101= datavalue(res6[0],'QKDWB3D3Rfp.UTolIBbDJGH');
var smvalue102= datavalue(res6[0],'QKDWB3D3Rfp.cJJJCGGLTOi');
var smvalue103= datavalue(res6[0],'QKDWB3D3Rfp.V0L9n6BBxKp');
var smvalue104= datavalue(res6[0],'QKDWB3D3Rfp.VDDnYYh4gAK');
var smvalue105= datavalue(res6[0],'QKDWB3D3Rfp.XpvgbSHy43w');
var smvalue106= datavalue(res6[0],'QKDWB3D3Rfp.qEaRHNTa7mi');
var smvalue107= datavalue(res6[0],'QKDWB3D3Rfp.cSY68ZH4wZg');
var smvalue108= datavalue(res6[0],'QKDWB3D3Rfp.Z9N77nA1ZwN');
var smvalue109= datavalue(res6[0],'QKDWB3D3Rfp.F1vIyc2K8oq');
var smvalue110= datavalue(res6[0],'QKDWB3D3Rfp.SKR6BiGmH39');
var smvalue111= datavalue(res6[0],'QKDWB3D3Rfp.K53Thqzzjya');
var smvalue112= datavalue(res6[0],'QKDWB3D3Rfp.XBuwUD1utmH');


var ressmvalue2 = smvalue55	+smvalue56	+smvalue57	+smvalue58	+smvalue59	+smvalue60	+smvalue61	+smvalue62	+smvalue63	+smvalue64	+smvalue65	+smvalue66	+smvalue67	+smvalue68	+smvalue69	+smvalue70	+smvalue71	+smvalue72	+smvalue73	+smvalue74	+smvalue75	+smvalue76	+smvalue77	+smvalue78	+smvalue79	+smvalue80	+smvalue81	+smvalue82	+smvalue83	+smvalue84	+smvalue85	+smvalue86	+smvalue87	+smvalue88	+smvalue89	+smvalue90	+smvalue91	+smvalue92	+smvalue93	+smvalue94	+
smvalue95	+smvalue96	+smvalue97	+smvalue98	+smvalue99	+smvalue100	+smvalue101	+smvalue102	+smvalue103	+smvalue104	+smvalue105	+smvalue106	+smvalue107	+smvalue108	+smvalue109	+smvalue110	+smvalue111	+smvalue112;

var smvalue113= datavalue(res6[0],'pGeBz8X2jRq.J83ylYGKhbA');
var smvalue114= datavalue(res6[0],'pGeBz8X2jRq.YFztQ2vR71N');
var smvalue115= datavalue(res6[0],'pGeBz8X2jRq.pslMIlKFXBh');
var smvalue116= datavalue(res6[0],'pGeBz8X2jRq.HUIWuBTBq08');
var smvalue117= datavalue(res6[0],'pGeBz8X2jRq.yHSAPCLxecr');
var smvalue118= datavalue(res6[0],'pGeBz8X2jRq.Pch5POkRK8D');
var smvalue119= datavalue(res6[0],'pGeBz8X2jRq.UTolIBbDJGH');
var smvalue120= datavalue(res6[0],'pGeBz8X2jRq.cJJJCGGLTOi');
var smvalue121= datavalue(res6[0],'pGeBz8X2jRq.V0L9n6BBxKp');
var smvalue122= datavalue(res6[0],'pGeBz8X2jRq.VDDnYYh4gAK');
var smvalue123= datavalue(res6[0],'pGeBz8X2jRq.XpvgbSHy43w');
var smvalue124= datavalue(res6[0],'pGeBz8X2jRq.qEaRHNTa7mi');
var smvalue125= datavalue(res6[0],'pGeBz8X2jRq.cSY68ZH4wZg');
var smvalue126= datavalue(res6[0],'pGeBz8X2jRq.Z9N77nA1ZwN');
var smvalue127= datavalue(res6[0],'pGeBz8X2jRq.F1vIyc2K8oq');
var smvalue128= datavalue(res6[0],'pGeBz8X2jRq.SKR6BiGmH39');
var smvalue129= datavalue(res6[0],'pGeBz8X2jRq.K53Thqzzjya');
var smvalue130= datavalue(res6[0],'pGeBz8X2jRq.XBuwUD1utmH');
var smvalue131= datavalue(res6[0],'vde3WauuLlB.J83ylYGKhbA');
var smvalue132= datavalue(res6[0],'vde3WauuLlB.YFztQ2vR71N');
var smvalue133= datavalue(res6[0],'vde3WauuLlB.pslMIlKFXBh');
var smvalue134= datavalue(res6[0],'vde3WauuLlB.HUIWuBTBq08');
var smvalue135= datavalue(res6[0],'vde3WauuLlB.yHSAPCLxecr');
var smvalue136= datavalue(res6[0],'vde3WauuLlB.Pch5POkRK8D');
var smvalue137= datavalue(res6[0],'vde3WauuLlB.UTolIBbDJGH');
var smvalue138= datavalue(res6[0],'vde3WauuLlB.cJJJCGGLTOi');
var smvalue139= datavalue(res6[0],'vde3WauuLlB.V0L9n6BBxKp');
var smvalue140= datavalue(res6[0],'vde3WauuLlB.VDDnYYh4gAK');
var smvalue141= datavalue(res6[0],'vde3WauuLlB.XpvgbSHy43w');
var smvalue142= datavalue(res6[0],'vde3WauuLlB.qEaRHNTa7mi');
var smvalue143= datavalue(res6[0],'vde3WauuLlB.cSY68ZH4wZg');
var smvalue144= datavalue(res6[0],'vde3WauuLlB.Z9N77nA1ZwN');
var smvalue145= datavalue(res6[0],'vde3WauuLlB.F1vIyc2K8oq');
var smvalue146= datavalue(res6[0],'vde3WauuLlB.SKR6BiGmH39');
var smvalue147= datavalue(res6[0],'vde3WauuLlB.K53Thqzzjya');
var smvalue148= datavalue(res6[0],'vde3WauuLlB.XBuwUD1utmH');
var smvalue149= datavalue(res6[0],'OBgHxL0dDc6.J83ylYGKhbA');
var smvalue150= datavalue(res6[0],'OBgHxL0dDc6.YFztQ2vR71N');
var smvalue151= datavalue(res6[0],'OBgHxL0dDc6.pslMIlKFXBh');
var smvalue152= datavalue(res6[0],'OBgHxL0dDc6.HUIWuBTBq08');
var smvalue153= datavalue(res6[0],'OBgHxL0dDc6.yHSAPCLxecr');
var smvalue154= datavalue(res6[0],'OBgHxL0dDc6.Pch5POkRK8D');
var smvalue155= datavalue(res6[0],'OBgHxL0dDc6.UTolIBbDJGH');
var smvalue156= datavalue(res6[0],'OBgHxL0dDc6.cJJJCGGLTOi');
var smvalue157= datavalue(res6[0],'OBgHxL0dDc6.V0L9n6BBxKp');
var smvalue158= datavalue(res6[0],'OBgHxL0dDc6.VDDnYYh4gAK');
var smvalue159= datavalue(res6[0],'OBgHxL0dDc6.XpvgbSHy43w');
var smvalue160= datavalue(res6[0],'OBgHxL0dDc6.qEaRHNTa7mi');
var smvalue161= datavalue(res6[0],'OBgHxL0dDc6.cSY68ZH4wZg');
var smvalue162= datavalue(res6[0],'OBgHxL0dDc6.Z9N77nA1ZwN');
var smvalue163= datavalue(res6[0],'OBgHxL0dDc6.F1vIyc2K8oq');
var smvalue164= datavalue(res6[0],'OBgHxL0dDc6.SKR6BiGmH39');
var smvalue165= datavalue(res6[0],'OBgHxL0dDc6.K53Thqzzjya');
var smvalue166= datavalue(res6[0],'OBgHxL0dDc6.XBuwUD1utmH');

var ressmvalue3 = smvalue113 +smvalue114 +smvalue115 +smvalue116 +smvalue117 +smvalue118 +smvalue119 +smvalue120 +smvalue121 +smvalue122 +smvalue123 +smvalue124 +smvalue125 +smvalue126 +smvalue127 +smvalue128 +smvalue129 +smvalue130 +smvalue131 +smvalue132 +smvalue133 +smvalue134 +smvalue135 +smvalue136 +smvalue137 +smvalue138 +smvalue139 +smvalue140 +smvalue141 +smvalue142 +smvalue143 +smvalue144 +smvalue145 +smvalue146 +smvalue147 +smvalue148 +smvalue149 +smvalue150 +smvalue151 +smvalue152 +smvalue153 +
smvalue154 +smvalue155 +smvalue156 +smvalue157 +smvalue158 +smvalue159 +smvalue160 +smvalue161 +smvalue162 +smvalue163 +smvalue164 + smvalue165+ smvalue166;

var smvalue167= datavalue(res6[0],'sbRu86GdCou.J83ylYGKhbA');
var smvalue168= datavalue(res6[0],'sbRu86GdCou.YFztQ2vR71N');
var smvalue169= datavalue(res6[0],'sbRu86GdCou.pslMIlKFXBh');
var smvalue170= datavalue(res6[0],'sbRu86GdCou.HUIWuBTBq08');
var smvalue171= datavalue(res6[0],'sbRu86GdCou.yHSAPCLxecr');
var smvalue172= datavalue(res6[0],'sbRu86GdCou.Pch5POkRK8D');
var smvalue173= datavalue(res6[0],'sbRu86GdCou.UTolIBbDJGH');
var smvalue174= datavalue(res6[0],'sbRu86GdCou.cJJJCGGLTOi');
var smvalue175= datavalue(res6[0],'sbRu86GdCou.V0L9n6BBxKp');
var smvalue176= datavalue(res6[0],'sbRu86GdCou.VDDnYYh4gAK');
var smvalue177= datavalue(res6[0],'sbRu86GdCou.XpvgbSHy43w');
var smvalue178= datavalue(res6[0],'sbRu86GdCou.qEaRHNTa7mi');
var smvalue179= datavalue(res6[0],'sbRu86GdCou.cSY68ZH4wZg');
var smvalue180= datavalue(res6[0],'sbRu86GdCou.Z9N77nA1ZwN');
var smvalue181= datavalue(res6[0],'sbRu86GdCou.F1vIyc2K8oq');
var smvalue182= datavalue(res6[0],'sbRu86GdCou.SKR6BiGmH39');
var smvalue183= datavalue(res6[0],'sbRu86GdCou.K53Thqzzjya');
var smvalue184= datavalue(res6[0],'sbRu86GdCou.XBuwUD1utmH');
var smvalue185= datavalue(res6[0],'sbRu86GdCou.K53Thqzzjya');
var smvalue186= datavalue(res6[0],'sbRu86GdCou.XBuwUD1utmH');

var ressmvalue4 = smvalue167  +smvalue168  +smvalue169  +smvalue170  +smvalue171  +smvalue172  +smvalue173  +smvalue174  +smvalue175  +smvalue176  +smvalue177  +smvalue178  +
smvalue179 +smvalue180 +smvalue181 +smvalue182 +smvalue183 +smvalue184 +smvalue185 +smvalue186;

var smvalue187= datavalue(res6[0],'Mqz9ktHV2qp.J83ylYGKhbA');
var smvalue188= datavalue(res6[0],'Mqz9ktHV2qp.YFztQ2vR71N');
var smvalue189= datavalue(res6[0],'Mqz9ktHV2qp.pslMIlKFXBh');
var smvalue190= datavalue(res6[0],'Mqz9ktHV2qp.HUIWuBTBq08');
var smvalue191= datavalue(res6[0],'Mqz9ktHV2qp.yHSAPCLxecr');
var smvalue192= datavalue(res6[0],'Mqz9ktHV2qp.Pch5POkRK8D');
var smvalue193= datavalue(res6[0],'Mqz9ktHV2qp.UTolIBbDJGH');
var smvalue194= datavalue(res6[0],'Mqz9ktHV2qp.cJJJCGGLTOi');
var smvalue195= datavalue(res6[0],'Mqz9ktHV2qp.V0L9n6BBxKp');
var smvalue196= datavalue(res6[0],'Mqz9ktHV2qp.VDDnYYh4gAK');
var smvalue197= datavalue(res6[0],'Mqz9ktHV2qp.XpvgbSHy43w');
var smvalue198= datavalue(res6[0],'Mqz9ktHV2qp.qEaRHNTa7mi');
var smvalue199= datavalue(res6[0],'Mqz9ktHV2qp.cSY68ZH4wZg');
var smvalue200= datavalue(res6[0],'Mqz9ktHV2qp.Z9N77nA1ZwN');
var smvalue201= datavalue(res6[0],'Mqz9ktHV2qp.F1vIyc2K8oq');
var smvalue202= datavalue(res6[0],'Mqz9ktHV2qp.SKR6BiGmH39');
var smvalue203= datavalue(res6[0],'Mqz9ktHV2qp.K53Thqzzjya');
var smvalue204= datavalue(res6[0],'Mqz9ktHV2qp.XBuwUD1utmH');
var smvalue205= datavalue(res6[0],'Mqz9ktHV2qp.K53Thqzzjya');
var smvalue206= datavalue(res6[0],'Mqz9ktHV2qp.XBuwUD1utmH');

var ressmvalue5 = smvalue187 +smvalue188 +smvalue189 +smvalue190 +smvalue191 +smvalue192 +smvalue193 +smvalue194 +smvalue195 +smvalue196 +smvalue197 +smvalue198 +smvalue199 +smvalue200 +smvalue201 +smvalue202 +smvalue203 +smvalue204 +smvalue205 +smvalue206;


var smvalue207= datavalue(res6[0],'ExnwTdbvzga.J83ylYGKhbA');
var smvalue208= datavalue(res6[0],'ExnwTdbvzga.YFztQ2vR71N');
var smvalue209= datavalue(res6[0],'ExnwTdbvzga.pslMIlKFXBh');
var smvalue210= datavalue(res6[0],'ExnwTdbvzga.HUIWuBTBq08');
var smvalue211= datavalue(res6[0],'ExnwTdbvzga.yHSAPCLxecr');
var smvalue212= datavalue(res6[0],'ExnwTdbvzga.Pch5POkRK8D');
var smvalue213= datavalue(res6[0],'ExnwTdbvzga.UTolIBbDJGH');
var smvalue214= datavalue(res6[0],'ExnwTdbvzga.cJJJCGGLTOi');
var smvalue215= datavalue(res6[0],'ExnwTdbvzga.V0L9n6BBxKp');
var smvalue216= datavalue(res6[0],'ExnwTdbvzga.VDDnYYh4gAK');
var smvalue217= datavalue(res6[0],'ExnwTdbvzga.XpvgbSHy43w');
var smvalue218= datavalue(res6[0],'ExnwTdbvzga.qEaRHNTa7mi');
var smvalue219= datavalue(res6[0],'ExnwTdbvzga.cSY68ZH4wZg');
var smvalue220= datavalue(res6[0],'ExnwTdbvzga.Z9N77nA1ZwN');
var smvalue221= datavalue(res6[0],'ExnwTdbvzga.F1vIyc2K8oq');
var smvalue222= datavalue(res6[0],'ExnwTdbvzga.SKR6BiGmH39');
var smvalue223= datavalue(res6[0],'ExnwTdbvzga.K53Thqzzjya');
var smvalue224= datavalue(res6[0],'ExnwTdbvzga.XBuwUD1utmH');
var smvalue225= datavalue(res6[0],'ExnwTdbvzga.K53Thqzzjya');
var smvalue226= datavalue(res6[0],'ExnwTdbvzga.XBuwUD1utmH');

var ressmvalue6 = smvalue207+smvalue208	+smvalue209	+smvalue210	+smvalue211	+smvalue212	+smvalue213	+smvalue214	+smvalue215	+smvalue216	+smvalue217	+smvalue218	+smvalue219	+
smvalue220	+smvalue221	+smvalue222	+smvalue223	+smvalue224	+smvalue225	+smvalue226;

var smvalue227= datavalue(res6[0],'p5YojCfJtwR.J83ylYGKhbA');
var smvalue228= datavalue(res6[0],'p5YojCfJtwR.YFztQ2vR71N');
var smvalue229= datavalue(res6[0],'p5YojCfJtwR.pslMIlKFXBh');
var smvalue230= datavalue(res6[0],'p5YojCfJtwR.HUIWuBTBq08');
var smvalue231= datavalue(res6[0],'p5YojCfJtwR.yHSAPCLxecr');
var smvalue232= datavalue(res6[0],'p5YojCfJtwR.Pch5POkRK8D');
var smvalue233= datavalue(res6[0],'p5YojCfJtwR.UTolIBbDJGH');
var smvalue234= datavalue(res6[0],'p5YojCfJtwR.cJJJCGGLTOi');
var smvalue235= datavalue(res6[0],'p5YojCfJtwR.V0L9n6BBxKp');
var smvalue236= datavalue(res6[0],'p5YojCfJtwR.VDDnYYh4gAK');
var smvalue237= datavalue(res6[0],'p5YojCfJtwR.XpvgbSHy43w');
var smvalue238= datavalue(res6[0],'p5YojCfJtwR.qEaRHNTa7mi');
var smvalue239= datavalue(res6[0],'p5YojCfJtwR.cSY68ZH4wZg');
var smvalue240= datavalue(res6[0],'p5YojCfJtwR.Z9N77nA1ZwN');
var smvalue241= datavalue(res6[0],'p5YojCfJtwR.F1vIyc2K8oq');
var smvalue242= datavalue(res6[0],'p5YojCfJtwR.SKR6BiGmH39');
var smvalue243= datavalue(res6[0],'p5YojCfJtwR.K53Thqzzjya');
var smvalue244= datavalue(res6[0],'p5YojCfJtwR.XBuwUD1utmH');
var smvalue245= datavalue(res6[0],'p5YojCfJtwR.K53Thqzzjya');
var smvalue246= datavalue(res6[0],'p5YojCfJtwR.XBuwUD1utmH');

var ressmvalue7 = smvalue227 +smvalue228+smvalue229	+smvalue230	+smvalue231	+smvalue232	+smvalue233	+smvalue234	+smvalue235	+smvalue236	+smvalue237	+smvalue238	+smvalue239	+
smvalue240	+smvalue241	+smvalue242	+smvalue243	+smvalue244	+smvalue245	+smvalue246;




           // ------------------------------- SERVICE MORE THAN 25 END----------------------------------------
            //$scope.loaderName;

            var tabledata = '<tr>';


            tabledata += ("<tr><td>" + "NEW-1121120000000" + "</td><td>" + periodIds + "</td><td>" + codes + "</td><td>" + more25 + "</td><td>" + aoc + "</td><td>" + resnmvalue1 + "</td><td></td><td></td><td></td><td></td></tr></tr><td>" + "NEW-1122120000000" + "</td><td>" + periodIds + "</td><td>" + codes + "</td><td>" + more25 + "</td><td>" + aoc + "</td><td>" + resnmvalue2 + "</td><td></td><td></td><td></td><td></td></tr></tr><td>" + "NEW-1123020000000" + "</td><td>" + periodIds + "</td><td>" + codes + "</td><td>" + more25 + "</td><td>" + aoc + "</td><td>" + resnmvalue3 + "</td><td></td><td></td><td></td><td></td></tr></tr><td>" + "NEW-1124120000000" + "</td><td>" + periodIds + "</td><td>" + codes + "</td><td>" + more25 + "</td><td>" + aoc + "</td><td>" + resnmvalue4 + "</td><td></td><td></td><td></td><td></td></tr></tr><td>" + "NEW-1124220000000" + "</td><td>" + periodIds + "</td><td>" + codes + "</td><td>" + more25 + "</td><td>" + aoc + "</td><td>" + resnmvalue5 + "</td><td></td><td></td><td></td><td></td></tr></tr><td>" + "NEW-1126020000000" + "</td><td>" + periodIds + "</td><td>" + codes + "</td><td>" + more25 + "</td><td>" + aoc + "</td><td>" + resnmvalue6 + "</td><td></td><td></td><td></td><td></td></tr></tr><td>" + "NEW-1131020211000" + "</td><td>" + periodIds + "</td><td>" + codes + "</td><td>" + more25 + "</td><td>" + aoc + "</td><td>" + resnmvalue7 + "</td><td></td><td></td><td></td><td></td></tr></tr><td>" + "NEW-1132120000000" + "</td><td>" + periodIds + "</td><td>" + codes + "</td><td>" + more25 + "</td><td>" + aoc + "</td><td>" + resnmvalue8 + "</td><td></td><td></td><td></td><td></td></tr></tr><td>" + "NEW-1141120000000" + "</td><td>" + periodIds + "</td><td>" + codes + "</td><td>" + more25 + "</td><td>" + aoc + "</td><td>" + resnmvalue9 + "</td><td></td><td></td><td></td><td></td></tr></tr><td>" + "NEW-1142020000000" + "</td><td>" + periodIds + "</td><td>" + codes + "</td><td>" + more25 + "</td><td>" + aoc + "</td><td>" + resnmvalue10 + "</td><td></td><td></td><td></td><td></td></tr></tr><td>" + "NEW-1151020000000" + "</td><td>" + periodIds + "</td><td>" + codes + "</td><td>" + more25 + "</td><td>" + aoc + "</td><td>" + resnmvalue11 + "</td><td></td><td></td><td></td><td></td></tr>");


            tabledata += ("<tr><td>" + "NEW-1121120000000" + "</td><td>" + periodIds + "</td><td>" + codes + "</td><td>" + less25 + "</td><td>" + aoc + "</td><td>" + resnlvalue1 + "</td><td></td><td></td><td></td><td></td></tr></tr><td>" + "NEW-1122120000000" + "</td><td>" + periodIds + "</td><td>" + codes + "</td><td>" + less25 + "</td><td>" + aoc + "</td><td>" + resnlvalue2 + "</td><td></td><td></td><td></td><td></td></tr></tr><td>" + "NEW-1123020000000" + "</td><td>" + periodIds + "</td><td>" + codes + "</td><td>" + less25 + "</td><td>" + aoc + "</td><td>" + resnlvalue3 + "</td><td></td><td></td><td></td><td></td></tr></tr><td>" + "NEW-1124120000000" + "</td><td>" + periodIds + "</td><td>" + codes + "</td><td>" + less25 + "</td><td>" + aoc + "</td><td>" + resnlvalue4 + "</td><td></td><td></td><td></td><td></td></tr></tr><td>" + "NEW-1124220000000" + "</td><td>" + periodIds + "</td><td>" + codes + "</td><td>" + less25 + "</td><td>" + aoc + "</td><td>" + resnlvalue5 + "</td><td></td><td></td><td></td><td></td></tr></tr><td>" + "NEW-1126020000000" + "</td><td>" + periodIds + "</td><td>" + codes + "</td><td>" + less25 + "</td><td>" + aoc + "</td><td>" + resnlvalue6 + "</td><td></td><td></td><td></td><td></td></tr></tr><td>" + "NEW-1131020211000" + "</td><td>" + periodIds + "</td><td>" + codes + "</td><td>" + less25 + "</td><td>" + aoc + "</td><td>" + resnlvalue7 + "</td><td></td><td></td><td></td><td></td></tr></tr><td>" + "NEW-1132120000000" + "</td><td>" + periodIds + "</td><td>" + codes + "</td><td>" + less25 + "</td><td>" + aoc + "</td><td>" + resnlvalue8 + "</td><td></td><td></td><td></td><td></td></tr></tr><td>" + "NEW-1141120000000" + "</td><td>" + periodIds + "</td><td>" + codes + "</td><td>" + less25 + "</td><td>" + aoc + "</td><td>" + resnlvalue9 + "</td><td></td><td></td><td></td><td></td></tr></tr><td>" + "NEW-1142020000000" + "</td><td>" + periodIds + "</td><td>" + codes + "</td><td>" + less25 + "</td><td>" + aoc + "</td><td>" + resnlvalue10 + "</td><td></td><td></td><td></td><td></td></tr></tr><td>" + "NEW-1151020000000" + "</td><td>" + periodIds + "</td><td>" + codes + "</td><td>" + less25 + "</td><td>" + aoc + "</td><td>" + resnlvalue11 + "</td><td></td><td></td><td></td><td></td></tr>");

            tabledata += ("<tr><td>" + "SRV-1110010900000" + "</td><td>" + periodIds + "</td><td>" + codes + "</td><td>" + more25 + "</td><td>" + aoc + "</td><td>" + ressmvalue1 + "</td><td></td><td></td><td></td><td></td></tr><tr><td>" + "SRV-1123020000000" + "</td><td>" + periodIds + "</td><td>" + codes + "</td><td>" + more25 + "</td><td>" + aoc + "</td><td>" + ressmvalue2 + "</td><td></td><td></td><td></td><td></td></tr><tr><td>" + "SRV-1124120000000" + "</td><td>" + periodIds + "</td><td>" + codes + "</td><td>" + more25 + "</td><td>" + aoc + "</td><td>" + ressmvalue3 + "</td><td></td><td></td><td></td><td></td></tr><tr><td>" + "SRV-1124220000000" + "</td><td>" + periodIds + "</td><td>" + codes + "</td><td>" + more25 + "</td><td>" + aoc + "</td><td>" + ressmvalue4 + "</td><td></td><td></td><td></td><td></td></tr><tr><td>" + "SRV-1125020000000" + "</td><td>" + periodIds + "</td><td>" + codes + "</td><td>" + more25 + "</td><td>" + aoc + "</td><td>" + ressmvalue5 + "</td><td></td><td></td><td></td><td></td></tr><tr><td>" + "SRV-1126020000000" + "</td><td>" + periodIds + "</td><td>" + codes + "</td><td>" + more25 + "</td><td>" + aoc + "</td><td>" + ressmvalue6 + "</td><td></td><td></td><td></td><td></td></tr><tr><td>" + "SRV-1131020211000" + "</td><td>" + periodIds + "</td><td>" + codes + "</td><td>" + more25 + "</td><td>" + aoc + "</td><td>" + ressmvalue7 + "</td><td></td><td></td><td></td><td></td></tr>");

            tabledata += "</tr>";

            $('.reporttable').append(tabledata);

            // $('.loader').style.display="none";


        }

        function datavalue(dataJSON, id) {
            var value1 = 0;
            for (var i = 0; i < dataJSON.rows.length; i++) {
                if (dataJSON.rows[i][0] == id) {
                    value1 = parseInt(dataJSON.rows[i][2]);
                }
            }
            return (value1);
        }
        function datavalue1(dataJSON, id, id1) {
            var value1 = 'No';
            for (var i = 0; i < dataJSON.rows.length; i++) {
                if (dataJSON.rows[i][0] == id) {
                    value1 = 'Yes';
                }
            }
            return (value1);
        }


        /**************************************************************************************************************/
    })